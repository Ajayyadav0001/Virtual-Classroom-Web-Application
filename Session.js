const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  unit: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit', required: true },
  title: { type: String, required: true },
  content: { type: String }
});

module.exports = mongoose.model('Session', SessionSchema);
