
	cpuSpeedValue0 = 0;
	cpuSpeedValue0 = 1;
	cpuSpeedValue0 = 2;
	cpuSpeedValue0 = 3;
	cpuSpeedValue0 = 4;
	cpuSpeedValue0 = 5;
	cpuSpeedValue0 = 6;
	cpuSpeedValue0 = 7;

var randomScalingFactor = function() {
	socket.on('message', function(response){

	//var response3 = response

	//var response3 = parseFloat(response).toPrecision(4);// decimal places
	//var response3 = response2.toString();
	//console.log(response3);

	cpuSpeedValue0 = response[0];
	cpuSpeedValue0 = response[1];
	cpuSpeedValue0 = response[2];
	cpuSpeedValue0 = response[3];
	cpuSpeedValue0 = response[4];
	cpuSpeedValue0 = response[5];
	cpuSpeedValue0 = response[6];
	cpuSpeedValue0 = response[7];


	//document.getElementById("log").innerHTML = response3[0] + '%';
	document.getElementById("log").innerHTML = parseFloat(response[0]).toPrecision(4) + '%';
	//cpuUsageValue;
	document.getElementById("log2").innerHTML = parseFloat(response[1]).toPrecision(4) + '%';
	document.getElementById("log3").innerHTML = parseFloat(response[2]).toPrecision(4) + '%';
	document.getElementById("log4").innerHTML = parseFloat(response[3]).toPrecision(4) + '%';
	document.getElementById("log5").innerHTML = parseFloat(response[4]).toPrecision(4) + '%';
	document.getElementById("log6").innerHTML = parseFloat(response[5]).toPrecision(4) + '%';
	document.getElementById("log7").innerHTML = parseFloat(response[6]).toPrecision(4) + '%';
	document.getElementById("log8").innerHTML = parseFloat(response[7]).toPrecision(4) + '%';
		})
			return cpuSpeedValue0/100;
			return cpuSpeedValue1/100;
			return cpuSpeedValue2/100;
			return cpuSpeedValue3/100;
			return cpuSpeedValue4/100;
			return cpuSpeedValue5/100;
			return cpuSpeedValue6/100;
			return cpuSpeedValue7/100;

	};
