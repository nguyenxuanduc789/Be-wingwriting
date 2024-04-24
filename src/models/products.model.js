const { model, Schema, Types } = require('mongoose');
const DOCUMENT_NAME = 'Product'
const COLLECTION_NAME = 'Products'
const productSchema = new Schema(
    {
      product_name: { type: String, required: true }, // tên sản phẩm
      category_id: { type: Types.ObjectId, ref: 'Category',require:true }, // ID danh mục
      country_id: { type: Types.ObjectId, ref: 'Country',require:true }, // ID quốc gia
      summary: { type: String, default: null }, // tóm tắt
      product_img: { type: String, default: null }, // hình ảnh sản phẩm
      period: { type: Number, default: null }, // giai đoạn
      courses_id:  { type: Types.ObjectId, ref: 'Course',require:true }, // ID khóa học
      product_detailed_explanation: { type: String, default: null }, // giải thích chi tiết
      price: { type: Number, default: 0 }, // giá
      discount_rate: { type: Number, default: 0 }, // tỷ lệ giảm giá
      discount_price: { type: Number, default: null }, // giá giảm giá
      tag: { type: String, default: null }, // nhãn/từ khóa
      is_posting: { type: Boolean, default: false }, // cờ đăng bài
      created_at: { type: Date, default: Date.now }, // thời gian tạo
      is_deleted: { type: Boolean, default: false }, // cờ xóa
      level: { type: String, default: null }, // mức độ
    },
    {
      timestamps: true, // tự động thêm created_at và updated_at
      collection: COLLECTION_NAME, // tên bộ sưu tập trong MongoDB
    }
);
module.exports =model(DOCUMENT_NAME,productSchema)