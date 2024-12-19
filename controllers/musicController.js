// controllers/musicController.js
const Music = require('../model/music');
const path = require('path');
const fs = require('fs');

// Save music
const saveMusic = async (req, res) => {
  try {
    const { title, artist } = req.body;
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const music = new Music({
      title,
      artist,
      file: req.file.filename,
    });
    await music.save();
    res.status(201).json({ message: 'Music uploaded successfully', music });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getAllMusic = async (req, res) => {
    try {
      const music = await Music.find();
      const musicWithUrl = music.map((track) => ({
        ...track._doc,
        fileUrl: `${req.protocol}://${req.get('host')}/uploads/${track.file}`,
      }));
      res.status(200).json(musicWithUrl);
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };
  

module.exports = { saveMusic, getAllMusic };
