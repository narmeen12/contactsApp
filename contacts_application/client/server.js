const express = require('express');
const router = require('express').Router();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const request = require('request');
const server = express();

server.use(express.static(__dirname));
server.use(morgan('dev'));
server.use(bodyParser.urlencoded({
  extended:true
}));
server.use(bodyParser.json());

const port = process.env.PORT || 8081;
server.listen(port);
console.log('Use port ' + port + ' to connect to this server');

exports = module.exports = server;
