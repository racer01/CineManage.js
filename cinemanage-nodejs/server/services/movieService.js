'use strict';
const _ = require('lodash');
const { Movie, Poster } = require('../models');

exports.getMovieList = async () => {
    return await Movie.findAll();
};

exports.getPoster = async (movieId) => {
    let condition = { id: parseInt(movieId) };
    let options = { where: condition };
    let result = await Poster.findOne(options);
    return result.dataValues.Poster;
};

exports.getMovie = async (movieId) => {
    let condition = { id: parseInt(movieId) };
    let options = { where: condition };
    let result = await Movie.findOne(options);
    return result;
};