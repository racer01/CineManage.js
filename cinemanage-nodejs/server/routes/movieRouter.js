'use strict';
const express = require('express');
const router = express.Router();
const service = require('../services/movieService');
const fileType = require('file-type');

router.get('/', async function (req, res) {
	// show all movies
	const movies = await service.getMovieList();
	res.status(200).send(movies);
});

router.get('/add', function (req, res) {
	// show add movie page
	res.status(200).send('add movie page');
});

router.get('/:movieId(\\d+)', async function (req, res) {
	// show movie details
    const movieId = req.params.movieId;
    const movieDetails = await service.getMovie(movieId);
	res.status(200).send(movieDetails);
});

router.get('/:movieId(\\d+)/edit', function (req, res) {
	// show edit movie page
	res.status(200).send('edit movie page');
});

router.get('/:movieId(\\d+)/poster', async function (req, res) {
    const movieId = req.params.movieId;
    const posterBuffer = await service.getPoster(movieId);
    const ft = fileType(posterBuffer);
    res.type(ft.mime).status(200).send(posterBuffer);
});

module.exports = router;