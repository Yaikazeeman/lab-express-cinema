const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Movie = require('../models/Movie');

router.get('/', (req, res) => {
  res.render('index');
})

router.get('/movies', (req, res) => {
  Movie.find({})
  .then(showMovies => {
    res.render('movies', {showMovies});
  })
  .catch(err => {
    console.log('err' + err);
  })
})

router.get('/movie/:id', (req, res) => {
  Movie.find({_id: req.params.id})
  .then(movie => {
    res.render('movie', {movie});
  })
  .catch(err => {
    console.log('err' + err);
  })

})

module.exports = router;