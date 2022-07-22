const express = require('express');
const recordRouter = require('./contact/router');

const root = express.Router({ mergeParams: true });

root.use('/', recordRouter);

module.exports = root;
