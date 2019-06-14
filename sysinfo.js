var express = require('express');
var app = express();
var si = require('systeminformation');

app.get('/', function(req, res){
		res.sendFile(__dirname +  '/index.html');
	});

app.use(express.static('js'));

var socket = require('socket.io')

var server = app.listen(3002, function(){
	console.log('localhost:3002');
	});

let io = socket(server)

//Whenever browser connects this gets executed
	io.on('connection', function(socket) {
	console.log('Browser connected');

setInterval(function(){

	si.currentLoad(function(data) {

		var coreload = data.cpus;

		const response = coreload.map(cpu => cpu.load);
		//console.log(response[0]);
		socket.send(response);
		//console.log(core0load.load);

		})

	}, 300);

//Whenever browser disconnects this piece of code executed
	socket.on('disconnect', function () {
	   console.log('Browser disconnected');
	});
 });

var socket = require('socket.io')
