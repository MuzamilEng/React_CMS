const express = require('express');
const app = express();
const multer = require('multer');
require('dotenv').config({ path: '.env' })
const connectDB = require('./db/connect');
const errorHandler = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
const cors = require('cors');
const path = require('path');
const componentsRoutes = require('./routes/components');



const storage = multer.diskStorage({
  destination: ('./public/uploads/'),
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 10 * 1024 * 1024,
  }
});
 const port = process.env.PORT || 8000;
// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.use('/api/v1', componentsRoutes)


app.use(errorHandler)
app.use(notFound)

const start = async () => {
  try {
    if (!process.env.URI) {
      throw new Error('MongoDB URI not defined');
    }

    await connectDB(process.env.URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};


start(); 