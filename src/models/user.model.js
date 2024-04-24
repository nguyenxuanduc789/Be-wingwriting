
const { model, Schema, Types } = require('mongoose');
const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'Users';
const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true }, // tên người dùng duy nhất
    password: { type: String, required: true }, // mật khẩu đã băm
    fullname: { type: String, required: true }, // tên đầy đủ
    birth_date: { type: Date, required: true }, // ngày sinh
    email: { type: String, required: true }, // địa chỉ email
    total_point: { type: Number, default: 0}, // tổng điểm
    avatar_url: { type: String, default: null }, // URL ảnh đại diện, không bắt buộc
    campus_id: { type: Types.ObjectId, ref: 'Campus', required: true }, // ID của trường/cơ sở
    level: { type: String, default: null }, // mức độ/level
    country_id:{ type: Types.ObjectId, ref: 'Country', required: true }, // ID quốc gia
    talksam_id: { type: String }, // ID tham chiếu khác
    is_member: { type: Boolean, default: false }, // cờ thành viên
    is_deleted: { type: Boolean, default: false }, // cờ xóa
    metadata_object: { type: Object }, // đối tượng JSON
    first_name: { type: String, default: null }, // tên đầu
    last_name: { type: String, default: null }, // tên cuối
    role_profile: { type:String, }, // hồ sơ vai trò
    sum_point: { type: Number, default: 0 }, // tổng điểm tổng hợp
    last_online: { type: Date }, // thời gian cuối online
  },
  {
    timestamps: true, // tự động thêm created_at và updated_at
    collection: COLLECTION_NAME, // tên bộ sưu tập trong MongoDB
  }
);

// Xuất mô hình User
module.exports = model(DOCUMENT_NAME, userSchema);
