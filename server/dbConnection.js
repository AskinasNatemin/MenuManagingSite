const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGODB_URL || 'mongodb://127.0.0.1/MenuManaging';

mongoose.connect(mongoURL)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((error) => console.error('MongoDB connection error:', error));

const db = mongoose.connection;
module.exports = db;
