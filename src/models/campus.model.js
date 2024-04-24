'use strict';
const { model, Schema ,Types} = require('mongoose');
const DOCUMENT_NAME = 'Campus';
const COLLECTION_NAME = 'Campus';

// Tạo lược đồ cho Campus
const campusSchema = new Schema(
  {
    campus_name: { type: String, required: true }, // tên cơ sở
    campus_code: { type: String, required: true }, // mã cơ sở
    country_id: { type: Types.ObjectId, ref: 'Country',require:true }, // ID quốc gia
    created_at: { type: Date, default: Date.now }, // thời gian tạo
    deleted_at: { type: Date, default: null }, // thời gian bị xóa
    campus_name_kr: { type: String, default: null }, // tên cơ sở bằng tiếng Hàn
  },
  {
    timestamps: true, // tự động thêm created_at và updated_at
    collection: COLLECTION_NAME, // tên bộ sưu tập trong MongoDB
  }
);

// Xuất mô hình Campus
module.exports = model(DOCUMENT_NAME, campusSchema);
