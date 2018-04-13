'use strict';
const path = require('path');
const express = require('express');
const router = express.Router();

const routes = ['/', '/movies', '/movies/:movieId(\\d+)'];
const indexPath = path.resolve(__dirname, '../../client/dist/index.html');

for (let route of routes) {
    router.get(route, (req, res) => {
        res.sendFile(indexPath);
    });
}

module.exports = router;