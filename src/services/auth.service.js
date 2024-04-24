const { findByEmail } = require("../models/repositories/user.repository")
const { BadRequestError, ConflictRequestError, AuthFailureError, ForbiddenRequestError } = require('../core/error.response')
const userModel = require("../models/user.model")
const { createTokenPair, verifyJWT } = require("../auth/authUtils")
const { getInfoData } = require("../utils")
const bcrypt = require('bcrypt')
const crypto = require('node:crypto')
const { validateSignUp } = require("../validation/user.validate")
const  { data_map }   = require("../constant/country")
const CountryModel = require('../models/country.model')
const CampusModel = require('../models/campus.model')
const {sendConfirmationEmail} = require('../library/Mail/init.mailer')
const { Types } = require("mongoose")
const code_mailsSchema= require ('../models/codemail.model')
class AuthService {
    static logout = async ({ _id }) => {
        const delKey = await KeyTokenService.removeKeyById(_id)
        return delKey
    }
    static login = async ({ email, password }) => {

        const foundUser = await findByEmail({ email, password });

        const match = await bcrypt.compare(password, foundUser.password);
        const tokens = await createTokenPair(foundUser, process.env.PUBLIC_KEY, process.env.PRIVATE_KEY);
        if (!match) throw new AuthFailureError('Authentication error')
        if (!foundUser) {
            throw new BadRequestError('Tài khoản hoặc mật khẩu không đúng');
        }
        
        return {
            "access_token": tokens,
            "token_type": "bearer",
        }
    }

    static signUp = async (body) => {
        const { email, password, full_name, nick_name, birth_date, country_id, campus_id, talksam_id } = body;
        const countryObjectId = await CountryModel.findOne({ _id:  new Types.ObjectId(country_id) }).select('_id').lean();
        const campusObjectId = await CampusModel.findOne({ _id:  new Types.ObjectId(campus_id) }).select('_id').lean();

        if (!email || !password || !full_name || !birth_date || !countryObjectId || !campus_id || !talksam_id) {
           
            throw new BadRequestError('Vui lòng cung cấp đủ thông tin bắt buộc');
        }
    
        // Kiểm tra xem email đã tồn tại hay chưa
        const holderUser = await userModel.findOne({ email }).lean();
        if (holderUser) {
            throw new BadRequestError('Tài khoản đã tồn tại');
        }
    
        // Tách tên thành last_name và first_name
        let last_name = '';
        let first_name = '';
        if (full_name) {
            const name = full_name.split(' ');
            if (name.length < 2) {
                throw new BadRequestError('Tên không hợp lệ');
            }
            last_name = name.pop();
            first_name = name.join(' ');
        }
    
        // Băm mật khẩu
        const passwordHash = await bcrypt.hash(password, 10);
    
        // Tạo người dùng mới
        const newUser = await userModel.create({
            last_name,
            first_name,
            email,
            username: email,
            password: passwordHash,
            nick_name,
            birth_date,
            fullname:full_name,
            campus_id: campusObjectId,
            talksam_id,
            country_id: countryObjectId
        });
    
        // Trả về kết quả thành công nếu tạo người dùng thành công
        if (newUser) {
            // Thực hiện các thao tác khác (nếu cần)
            return {
                success: true,
                user_id: newUser._id
            };
        }
    }    
    static va = async ({user}) => {
        console.log(user)
        //step1: check email exists??
        const holderUser = await userModel.findOne({ email: user.email }).lean();
        if (!holderUser) {
            throw new BadRequestError('Tài khoản không tồn tại')
        }
        return {
            code: 202,
            metadata: {
                info_user: getInfoData({ fields: ['_id', 'name', 'email'], object: holderUser })
            }
        }

    }
    static sendCodeEmail = async (body) => {
        const { email } = body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!email || !emailRegex.test(email)) {
            throw new BadRequestError('Vui lòng cung cấp một địa chỉ email hợp lệ');
        }
        const holderUser = await userModel.findOne({ email }).lean();
        if (holderUser) {
            throw new BadRequestError('Tài khoản đã tồn tại');
        }
        const code = Math.floor(100000 + Math.random() * 900000);
        const newCode = await code_mailsSchema.create({
            email,
            code
        });
        if(!newCode){
            throw new BadRequestError('Vui lòng thu lai');
        }
        await sendConfirmationEmail(email,code);
        return {
            "is_exists": true
        };
    }
    static verifyEmail = async (body) => {
        try {
            const { email, code } = body;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
            if (!email || !emailRegex.test(email)) {
                throw new BadRequestError('Vui lòng cung cấp một địa chỉ email hợp lệ');
            }
            const holderUser = await code_mailsSchema.findOne({ email,code });
            if (!holderUser) {
                throw new BadRequestError('Ma code khong hop le');
            }
            await sendConfirmationEmail(email);
            await code_mailsSchema.findOneAndUpdate({ email,code }, { is_verify: true });
            return {
                is_verify: true
            };
        } catch (error) {
            // Xử lý lỗi nếu có
            console.error('Error in verifying email:', error);
            throw error; // Re-throw lỗi để xử lý ở các lớp trên
        }
        
    }   
}
module.exports = AuthService