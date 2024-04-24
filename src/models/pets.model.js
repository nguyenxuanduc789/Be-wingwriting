'use strict';
const { model, Schema } = require('mongoose');
const DOCUMENT_NAME = 'Pet';
const COLLECTION_NAME = 'Pets';

// Tạo lược đồ cho Pets
const petsSchema = new Schema(
  {
    pet_name: { type: String, required: true }, // tên thú cưng
    url_model: { type: String, default: null }, // mô hình URL
    gif_avatar: { type: String, default: null }, // ảnh động đại diện
    pet_avatar: { type: String, default: null }, // ảnh đại diện của thú cưng
    animation: { type: String, default: null }, // hoạt ảnh
    sticker: { type: String, default: null }, // nhãn dán
    fashion: { type: String, default: null }, // trang phục/thời trang
    point_exchange: { type: Number, default: 0 }, // điểm trao đổi
    point_exchange_3d: { type: Number, default: 0 }, // điểm trao đổi 3D
    level: { type: String, default: null }, // mức độ
    description: { type: String, default: null }, // mô tả
    created_at: { type: Date, default: Date.now }, // thời gian tạo
    url_background: { type: String, default: null }, // URL nền
  },
  {
    timestamps: true, // tự động thêm created_at và updated_at
    collection: COLLECTION_NAME, // tên bộ sưu tập trong MongoDB
  }
);

// Xuất mô hình Pets
module.exports = model(DOCUMENT_NAME, petsSchema);
