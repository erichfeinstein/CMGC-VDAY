const path = require('path');
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

// const Valentine = require('./db/index').Valentine;

const app = express();
app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', '/client/index.html'));
});

module.exports = app;
