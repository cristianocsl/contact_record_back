const express = require('express');
const http = require('http');

const cors = require('cors');
const bodyParser = require('body-parser');
const root = require('./api/controllers/root');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/', root);
const server = http.createServer(app);

module.exports = server;