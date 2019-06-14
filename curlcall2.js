var express = require('express');
var app = express();
const http = require('http');

/////////////// server part //////////////

app.get('/', function(req, res){
		res.sendFile(__dirname +  '/index.html');
	});

app.use(express.static('js'));

var socket = require('socket.io')

var server = app.listen(3003, function(){
	console.log('localhost:3003');
	});

let io = socket(server)

/////////////// docker.sock part //////////////
 
const options = {
  socketPath: '/var/run/docker.sock',
  path: '/containers/b1f86a847676/stats'
};

//var output=[];
//var resp=[];

const callback = resp => {
  console.log(`STATUS: ${resp.statusCode}`);

        var body = '';

    resp.on('data', (chunk) => {
          body += chunk;
        var resp = JSON.parse(chunk + '');
        var output = console.log (JSON.stringify(resp.precpu_stats.cpu_usage.percpu_usage, null, 4));
	
	//console.log(JSON.stringify(output));

    });

}




/////////////// io connections ////////////

	io.on('connection', function(socket) {
	console.log('Browser connected');

//setInterval(function(){

	callback(function(data) {

		var coreload = data.output;


		//const response = coreload.map(cpu => cpu.output);
		socket.send(coreload);
		console.log(coreload);
		//}

	//}, 300);

	socket.on('disconnect', function () {
	   console.log('Browser disconnected');
		});
	 });
});

var socket = require('socket.io')

const clientRequest = http.get(options, callback);
clientRequest.end(0);
