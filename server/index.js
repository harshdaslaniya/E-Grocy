const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const costumerRoutes = require('./routes/costumerRoute');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const port =process.env.PORT || 8000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware to enable CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
// Middleware to parse JSON data
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/customer', costumerRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  });
// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});