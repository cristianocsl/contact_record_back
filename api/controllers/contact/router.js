const express = require('express');
const recordContactController = require('./index');
const uploadFile = require('../../middleware');

const recordRouter = express.Router({ mergeParams: true });

recordRouter.post('/recordContact', uploadFile.single('attachedFile'), recordContactController);

module.exports = recordRouter;
