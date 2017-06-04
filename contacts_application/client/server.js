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
server.use('/', router);

server.get('/getContacts', (req,res) => {
  console.log("HEY!")
	request.get({
		url:'http://127.0.0.1:8000/contacts'},
		(err,resp,body) => {
			if(err) throw err;
		  console.log("ERR:",err,"RESP",resp,"BODY",body);
	})
})


const port = process.env.PORT || 8081;
server.listen(port);
console.log('Use port ' + port + ' to connect to this server');

exports = module.exports = server;
