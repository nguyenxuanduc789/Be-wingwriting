'use strict';
const { model, Schema } = require('mongoose');
const DOCUMENT_NAME = 'Course';
const COLLECTION_NAME = 'Courses';

const coursesSchema = new Schema(
  {
    course_name: { type: String, required: true },
    created_at: { type: Date, default: Date.now }, 
    level: { type: String, default: null },
    is_deleted: { type: Boolean, default: false },
    paragraph: { type: Number, default: 0 }, 
    minimum_words: { type: Number, default: 0 }, 
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME, 
  }
);

module.exports = model(DOCUMENT_NAME, coursesSchema);
