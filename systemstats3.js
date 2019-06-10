var express = require('express');
var app = express();
var os = require('os');

app.get('/', function(req, res){
		res.sendFile(__dirname +  '/index.html');
	});

app.use(express.static('js'));

var socket = require('socket.io')

var server = app.listen(3000, function(){
	console.log('localhost:3000');
});

let io = socket(server)

//Whenever browser connects this gets executed
io.on('connection', function(socket) {
	console.log('Browser connected');

	setInterval(function(){

		var cpus = os.cpus();

		var cpuSpeed0 = cpus[0].speed;
		//console.log('1: ' + cpuSpeed0);
		var cpuSpeed1 = cpus[1].speed;
		var cpuSpeed2 = cpus[2].speed;
		var cpuSpeed3 = cpus[3].speed;
		var cpuSpeed4 = cpus[4].speed;
		var cpuSpeed5 = cpus[5].speed;
		var cpuSpeed6 = cpus[6].speed;
		var cpuSpeed7 = cpus[7].speed;

		socket.send(cpuSpeed0);
		socket.send(cpuSpeed1);
		socket.send(cpuSpeed2);
		socket.send(cpuSpeed3);
		socket.send(cpuSpeed4);
		socket.send(cpuSpeed5);
		socket.send(cpuSpeed6);
		socket.send(cpuSpeed7);
	}, 300);


	//Whenever browser disconnects this piece of code executed
	socket.on('disconnect', function () {
	   console.log('Browser disconnected');
	});
 });

var socket = require('socket.io')
