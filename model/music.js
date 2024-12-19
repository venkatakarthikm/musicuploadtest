// model/music.js
const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  file: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Music', musicSchema);