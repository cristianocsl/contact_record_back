const express = require('express');
const { recordContactController } = require('./index');

const recordRouter = express.Router({ mergeParams: true });

recordRouter.post('/recordContact', recordContactController);

module.exports = recordRouter;
