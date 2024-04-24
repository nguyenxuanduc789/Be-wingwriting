const { model, Schema } = require('mongoose');
const DOCUMENT_NAME = 'Ebook';
const COLLECTION_NAME = 'Ebooks';

// Tạo lược đồ cho Ebook
const ebookSchema = new Schema(
  {
    book_title: { type: String, required: true }, // tiêu đề sách
    ebook_link: { type: String, required: true }, // liên kết ebook
    include: { type: Number, default: null }, // bao gồm gì
    user_id: { type: Types.ObjectId, ref: 'User', required: true }, // ID của người dùng
    author: { type: String, default: null }, // tác giả
    book_cover: { type: String, default: null }, // bìa sách
    created_at: { type: Date, default: Date.now }, // thời gian tạo
    is_deleted: { type: Boolean, default: false }, // cờ xóa
    product_id: { type: Types.ObjectId, ref: 'Product', required: true }, // ID sản phẩm
    is_public: { type: Boolean, default: false }, // công khai
  },
  {
    timestamps: true, // tự động thêm created_at và updated_at
    collection: COLLECTION_NAME, // tên bộ sưu tập trong MongoDB
  }
);

// Xuất mô hình Ebook
module.exports = model(DOCUMENT_NAME, ebookSchema);
