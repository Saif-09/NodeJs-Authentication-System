require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/mongoose.js');

const app = express();
const PORT =  3000;

// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));

app.listen(PORT)
  .on('error', function(err) {
    console.log(`Error in starting server ${err} `);
  })
  .on('listening', function() {
    console.log(`Server running on port:${PORT}`);
});

connectDB().then(res => {
  console.log("Database connected");
})
