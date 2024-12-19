// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const musicRoutes = require('./routes/musicRoutes');
const app = express();

const cors = require('cors');
app.use(cors());


// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/music', musicRoutes);
app.use('/uploads', express.static('uploads'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));