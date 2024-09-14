const mongoose = require('mongoose');

const UnitSchema = new mongoose.Schema({
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  title: { type: String, required: true },
  description: { type: String }
});

module.exports = mongoose.model('Unit', UnitSchema);
