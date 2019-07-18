const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Movie = require('../models/Movie');

router.get('/movie/:id', (req, res) => {
  const id = req.params.id
  Movie.findById(id, (err, movie) => {
    if (err) { return next(err);}
    res.render('movie', {movie})
  })
})

module.exports = router;