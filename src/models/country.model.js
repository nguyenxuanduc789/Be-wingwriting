const { model, Schema, Types } = require('mongoose');
const DOCUMENT_NAME = 'Country'
const COLLECTION_NAME = 'Countrys'
// Lược đồ cho Country
const countSchema = new Schema(
  {
    country_name: { type: String, required: true }, // tên quốc gia
    created_at: { type: Date, default: Date.now }, // thời gian tạo
    deleted_at: { type: Date, default: null }, // thời gian bị xóa
  },
  {
    timestamps: true, // tự động thêm created_at và updated_at
    collection: COLLECTION_NAME, // tên bộ sưu tập trong MongoDB
  }
);
module.exports =model(DOCUMENT_NAME,countSchema)