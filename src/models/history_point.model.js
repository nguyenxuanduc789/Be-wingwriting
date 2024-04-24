'use strict';
const { model, Schema } = require('mongoose');
const DOCUMENT_NAME = 'HistoryPoint';
const COLLECTION_NAME = 'HistoryPoints';

// Tạo lược đồ cho HistoryPoint
const historyPointSchema = new Schema(
  {
    user_id: { type: Types.ObjectId, ref: 'User', required: true }, // ID của người dùng
    point: { type: Number, required: true }, // điểm
    created_at: { type: Date, default: Date.now }, // ngày tạo
    course_name: { type: String, default: null }, // tên khóa học
    lesson_name: { type: String, default: null }, // tên bài học
    count: { type: Number, default: 0 }, // số lượng
    part: { type: String, default: null }, // phần
  },
  {
    timestamps: true, // tự động thêm created_at và updated_at
    collection: COLLECTION_NAME, // tên bộ sưu tập trong MongoDB
  }
);

// Xuất mô hình HistoryPoint
module.exports = model(DOCUMENT_NAME, historyPointSchema);
