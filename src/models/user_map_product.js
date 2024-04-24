const { model, Schema } = require('mongoose');
const DOCUMENT_NAME = 'UserMapProduct';
const COLLECTION_NAME = 'UserMapProducts';

// Tạo lược đồ cho UserMapProduct
const userMapProductSchema = new Schema(
  {
    user_id: { type: Types.ObjectId, ref: 'User', required: true }, 
    product_id: { type: Types.ObjectId, ref: 'Product', required: true },
    status: { type: String, default: null }, 
    created_at: { type: Date, default: Date.now }, 
    is_deleted: { type: Boolean, default: false }, 
    start_date: { type: Date, default: null },
    end_date: { type: Date, default: null },
  },
  {
    timestamps: true, // tự động thêm created_at và updated_at
    collection: COLLECTION_NAME, // tên bộ sưu tập trong MongoDB
  }
);

// Xuất mô hình UserMapProduct
module.exports = model(DOCUMENT_NAME, userMapProductSchema);
