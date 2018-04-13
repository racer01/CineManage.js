'use strict';
const path = require('path');
const express = require('express');
const app = express();

const indexRouter = require('./routes/indexRouter');
const movieRouter = require('./routes/movieRouter');

app.use('/', indexRouter);
app.use('/api/movies', movieRouter);
app.set('views', path.resolve(__dirname, '../client/dist'));
app.use(express.static(path.resolve(__dirname, '../client/dist')))
app.use(express.static('public'))
app.listen(3000, () => console.log('Cinemanage started')) 