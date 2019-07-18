const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Movie = require('../models/Movie');

router.get('/', (req, res) => {
  res.render('index');
})

module.exports = router;