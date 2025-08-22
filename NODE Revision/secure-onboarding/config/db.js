const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('🗄️ MongoDB Connected');
  } catch (err) {
    console.error('Mongo Error:', err.message);
    process.exit(1);
  }
}
module.exports = connectDB;
