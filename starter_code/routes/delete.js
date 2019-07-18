const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Movie = require('../models/Movie');

router.get('/movie/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Movie.findByIdAndRemove(id, (err, movie) => {
    if (err) { return next(err);}
    res.redirect('/movies')
  })
})
module.exports = router;