const express = require('express');
const { recordContactController, getContactsController } = require('./index');
const uploadFile = require('../../middleware');

const recordRouter = express.Router({ mergeParams: true });

recordRouter.post('/recordContact', uploadFile.single('attachedFile'), recordContactController);
recordRouter.post('/getContacts', getContactsController);

module.exports = recordRouter;
