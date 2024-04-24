const { model, Schema } = require('mongoose');
const DOCUMENT_NAME = 'UserMapLesson';
const COLLECTION_NAME = 'UserMapLessons';

// Lược đồ cho UserMapLesson
const userMapLessonSchema = new Schema(
  {
    user_id: { type: Types.ObjectId, ref: 'User', required: true }, // ID của người dùng
    lesson_id: { type: Types.ObjectId, ref: 'Lesson',require:true }, // ID của bài học
    ebook_id:  { type: Types.ObjectId, ref: 'Ebook',require: true }, // ID của ebook
    artwork_id: { type: Types.ObjectId, ref: 'Artwork',require: true }, // ID của tác phẩm nghệ thuật
    created_at: { type: Date, default: Date.now }, // thời gian tạo
    start_day: { type: Date, default: null }, // ngày bắt đầu
    end_day: { type: Date, default: null }, // ngày kết thúc
    is_deleted: { type: Boolean, default: false }, // cờ xóa
    status: { type: String, default: null }, // trạng thái
    metadata_object: { type: Object, default: {} }, // đối tượng metadata
    history: { type: String, default: null }, // lịch sử
    time_writing: { type: String, default: null }, // thời gian viết
    writing_title: { type: String, default: null }, // tiêu đề bài viết
    writing: { type: String, default: null }, // nội dung viết
    self_editing: { type: String, default: null }, // tự chỉnh sửa
    update_date: { type: Date, default: null }, // ngày cập nhật
  },
  {
    timestamps: true, // tự động thêm created_at và updated_at
    collection: COLLECTION_NAME, // tên bộ sưu tập
  }
);
module.exports =model(DOCUMENT_NAME,userMapLessonSchema)