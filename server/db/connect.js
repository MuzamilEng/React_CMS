const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.URI;

    if (!uri) {
      throw new Error('URI not defined in .env file');
    }

    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

module.exports = connectDB;
