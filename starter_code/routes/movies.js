const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Movie = require('../models/Movie');

router.get('/movies', (req, res) => {
  Movie.find({})
  .then(showMovies => {
    res.render('movies', {showMovies});
  })
  .catch(err => {
    console.log('err' + err);
  })
})

module.exports = router;