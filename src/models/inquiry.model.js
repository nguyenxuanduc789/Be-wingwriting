
const { model, Schema, Types } = require('mongoose');
const DOCUMENT_NAME = 'Inquiry';
const COLLECTION_NAME = 'Inquirys';
const inquirySchema = new Schema(
  {
    user_id: { type: Types.ObjectId, ref: 'User', required: true }, // ID của người dùng
    division: { type: String, required: true }, // phòng ban
    title: { type: String, required: true }, // tiêu đề
    question: { type: String, required: true }, // câu hỏi
    answer: { type: String, default: null }, // câu trả lời
    reply_status: { type: String, default: 'pending' }, // trạng thái trả lời
    created_at: { type: Date, default: Date.now }, // thời gian tạo
    name: { type: String, default: null }, // tên
    email: { type: String, required: true }, // email
  },
  {
    timestamps: true, // tự động thêm created_at và updated_at
    collection: COLLECTION_NAME, // tên bộ sưu tập
  }
);
module.exports = model(DOCUMENT_NAME, inquirySchema);