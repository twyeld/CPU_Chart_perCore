
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

	cpuSpeedValue0 = response[0];
	cpuSpeedValue0 = response[1];
	cpuSpeedValue0 = response[2];
	cpuSpeedValue0 = response[3];
	cpuSpeedValue0 = response[4];
	cpuSpeedValue0 = response[5];
	cpuSpeedValue0 = response[6];
	cpuSpeedValue0 = response[7];

	//console.log('CPU usage value every second', data)

	//cpuSpeedValue = response;

	//response2 = cpuSpeedValue/1000

	//var data3 = parseFloat(data2).toPrecision(4);// decimal places
	//var response = data3.toString();
	document.getElementById("log").innerHTML = response[0]/1000 + 'GHz';
	//cpuUsageValue;
	document.getElementById("log2").innerHTML = response[1]/1000 + 'GHz';
	document.getElementById("log3").innerHTML = response[2]/1000 + 'GHz';
	document.getElementById("log4").innerHTML = response[3]/1000 + 'GHz';
	document.getElementById("log5").innerHTML = response[4]/1000 + 'GHz';
	document.getElementById("log6").innerHTML = response[5]/1000 + 'GHz';
	document.getElementById("log7").innerHTML = response[6]/1000 + 'GHz';
	document.getElementById("log8").innerHTML = response[7]/1000 + 'GHz';
	//document.getElementById("log9").innerHTML = response + 'GHz';
		})
			return cpuSpeedValue0/2500;
			return cpuSpeedValue1/2500;
			return cpuSpeedValue2/2500;
			return cpuSpeedValue3/2500;
			return cpuSpeedValue4/2500;
			return cpuSpeedValue5/2500;
			return cpuSpeedValue6/2500;
			return cpuSpeedValue7/2500;

	};
