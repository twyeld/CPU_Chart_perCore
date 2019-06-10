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

	// CPU0

	//socket.on('CPU0', function(){

	//	var data = {'CPU0speed':os.cpus().speed};
	//		io.emit('CPU0', data);
	//		console.log(data);
	//	});

	setInterval(function(){

		var cpus = os.cpus();



		const response = cpus.map(cpu => cpu.speed);
		//console.log(response[0]);
		socket.send(response);

	}, 300);


	//Whenever browser disconnects this piece of code executed
	socket.on('disconnect', function () {
	   console.log('Browser disconnected');
	});
 });

var socket = require('socket.io')
