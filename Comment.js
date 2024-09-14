const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  lecture: { type: mongoose.Schema.Types.ObjectId, ref: 'Lecture', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  parentComment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }
});

module.exports = mongoose.model('Comment', CommentSchema);
