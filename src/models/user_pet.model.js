'use strict';
const { model, Schema } = require('mongoose');
const DOCUMENT_NAME = 'UserPet';
const COLLECTION_NAME = 'UserPets';

// Tạo lược đồ cho UserPet
const userPetSchema = new Schema(
  {
        user_id: { type: Types.ObjectId, ref: 'User', required: true },  // ID của người dùng
        pet_id: { type: Types.ObjectId, ref: 'Pet', default: null  },
        animation_owned: { type: String, default: null }, // hoạt ảnh đã sở hữu
        sticker_owned: { type: String, default: null }, // nhãn dán đã sở hữu
        fashion_owned: { type: String, default: null }, // thời trang đã sở hữu
        voice_speech: { type: String, default: null }, // giọng nói/giọng đọc
        created_at: { type: Date, default: Date.now }, // thời gian tạo
        affection_point: { type: Number, default: 0 }, // điểm tình cảm
  },
  {
    timestamps: true, // tự động thêm created_at và updated_at
    collection: COLLECTION_NAME, // tên bộ sưu tập trong MongoDB
  }
);

// Xuất mô hình UserPet
module.exports = model(DOCUMENT_NAME, userPetSchema);
