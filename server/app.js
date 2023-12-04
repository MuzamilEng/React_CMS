const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' })
const componentsRoutes = require('./routes/components');
const templateRoutes = require('./routes/templates');
const cors = require('cors');



const port = 5000; // Set the port directly

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1/components', componentsRoutes);
app.use('/api/v1/templates', templateRoutes)
// MongoDB connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://muzekhan777:muzamil@cluster0.jhpz0k8.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true, // Add this option to use the new URL parser
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

const start = async () => {
  try {
    await connectDB(); // Call the connectDB function

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
