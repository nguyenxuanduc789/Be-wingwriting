const { model, Schema } = require('mongoose');
const DOCUMENT_NAME = 'Lesson';
const COLLECTION_NAME = 'Lessons';

// Lược đồ cho UserMapLesson
const lessonSchema = new Schema(
    {
      course_id:  { type: Types.ObjectId, ref: 'Course',require:true }, // ID của khóa học
      count: { type: Number, default: 0 }, // số lượng
      title: { type: String, required: true }, // tiêu đề
      sub_title: { type: String, default: null }, // phụ đề
      topic: { type: String, default: null }, // chủ đề
      is_book_review: { type: Boolean, default: false }, // cờ xem xét sách
      book_review_text: { type: String, default: null }, // văn bản xem xét sách
      book_review_img: { type: String, default: null }, // hình ảnh xem xét sách
      book_review_url: { type: String, default: null }, // URL xem xét sách
      image_location: { type: String, default: null }, // vị trí hình ảnh
      minimum_of_characters: { type: Number, default: 0 }, // số ký tự tối thiểu
      maximum_of_characters: { type: Number, default: 0 }, // số ký tự tối đa
      gender: { type: String, default: null }, // giới tính
      vocabulary: { type: String, default: null }, // từ vựng
      text_complexity: { type: String, default: null }, // độ phức tạp của văn bản
      primary_sentence_structure: { type: String, default: null }, // cấu trúc câu chính
      grade_level: { type: String, default: null }, // cấp độ
      features: { type: String, default: null }, // đặc điểm
      sentence_length: { type: String, default: null }, // độ dài câu
      created_at: { type: Date, default: Date.now }, // thời gian tạo
      is_deleted: { type: Boolean, default: false }, // cờ xóa
      grammar: { type: String, default: null }, // ngữ pháp
      lexile_range: { type: String, default: null }, // phạm vi lexile
      writing_point: { type: Number, default: 0 }, // điểm viết
    },
    {
      timestamps: true, // tự động thêm created_at và updated_at
      collection: COLLECTION_NAME, // tên bộ sưu tập
    }
);
module.exports =model(DOCUMENT_NAME,lessonSchema)