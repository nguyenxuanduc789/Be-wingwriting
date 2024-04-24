'use strict';
const { model, Schema } = require('mongoose');
const DOCUMENT_NAME = 'Category';
const COLLECTION_NAME = 'Category';

// Tạo lược đồ cho Category
const categorySchema = new Schema(
  {
    category_name: { type: String, required: true }, // tên danh mục
    created_at: { type: Date, default: Date.now }, // thời gian tạo
    deleted_at: { type: Date, default: null }, // thời gian bị xóa
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);
module.exports = model(DOCUMENT_NAME, categorySchema);
