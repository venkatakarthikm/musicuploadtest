const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path'); // Ensure this is included
const { saveMusic, getAllMusic } = require('../controllers/musicController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post('/upload', upload.single('musicFile'), saveMusic);
router.get('/', getAllMusic);

module.exports = router;
