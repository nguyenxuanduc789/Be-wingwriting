'use strict';
const { model, Schema, Types } = require('mongoose');
const DOCUMENT_NAME = 'ApprovalToCampus';
const COLLECTION_NAME = 'ApprovalToCampus';

// Tạo lược đồ cho ApprovalToCampus
const approvalToCampusSchema = new Schema(
  {
    campus_id:{ type: Types.ObjectId, ref: 'Campus',require:true }, // ID của cơ sở
    email: { type: String, required: true }, // email
    talksam_id: { type: String, default: null }, // ID talksam
    created_at: { type: Date, default: Date.now }, // thời gian tạo
    product_id: { type: Number, default: null }, // ID sản phẩm
    status: { type: String, default: null }, // trạng thái
    expiration_date: { type: Date, default: null }, // ngày hết hạn
    course_id: { type: Number, default: null }, // ID khóa học
  },
  {
    timestamps: true, // tự động thêm created_at và updated_at
    collection: COLLECTION_NAME, // tên bộ sưu tập trong MongoDB
  }
);

// Xuất mô hình ApprovalToCampus
module.exports = model(DOCUMENT_NAME, approvalToCampusSchema);
