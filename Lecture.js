const mongoose = require('mongoose');

const LectureSchema = new mongoose.Schema({
  session: { type: mongoose.Schema.Types.ObjectId, ref: 'Session', required: true },
  title: { type: String, required: true },
  videoUrl: { type: String },
  content: { type: String }
});

module.exports = mongoose.model('Lecture', LectureSchema);
