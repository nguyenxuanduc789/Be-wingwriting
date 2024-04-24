
const { model, Schema, Types } = require('mongoose');
const DOCUMENT_NAME = 'Artwork';
const COLLECTION_NAME = 'Artworks';
const artworkSchema = new Schema(
    {
      artwork_link: { type: String, required: true }, // liên kết tác phẩm nghệ thuật
      created_at: { type: Date, default: Date.now }, // thời gian tạo
      is_deleted: { type: Boolean, default: false }, // cờ xóa
      title: { type: String, required: true }, // tiêu đề
      content: { type: String, default: null }, // nội dung
      image_index: { type: Number, default: 0 }, // chỉ số hình ảnh
      uploaded: { type: String, default: null }, // đã tải lên
    },
    {
      timestamps: true, // tự động thêm created_at và updated_at
      collection:COLLECTION_NAME, // tên bộ sưu tập
    }
);
module.exports = model(DOCUMENT_NAME, artworkSchema);