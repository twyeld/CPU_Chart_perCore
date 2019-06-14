
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

	var response3 = response

	//var response3 = parseFloat(response).toPrecision(4);// decimal places

	cpuSpeedValue0 = response[0];
	cpuSpeedValue0 = response[1];
	cpuSpeedValue0 = response[2];
	cpuSpeedValue0 = response[3];
	cpuSpeedValue0 = response[4];
	cpuSpeedValue0 = response[5];
	cpuSpeedValue0 = response[6];
	cpuSpeedValue0 = response[7];


	document.getElementById("log").innerHTML = response3[0]/1 + '%';
	//cpuUsageValue;
	document.getElementById("log2").innerHTML = response3[1]/1 + '%';
	document.getElementById("log3").innerHTML = response3[2]/1 + '%';
	document.getElementById("log4").innerHTML = response3[3]/1 + '%';
	document.getElementById("log5").innerHTML = response3[4]/1 + '%';
	document.getElementById("log6").innerHTML = response3[5]/1 + '%';
	document.getElementById("log7").innerHTML = response3[6]/1 + '%';
	document.getElementById("log8").innerHTML = response3[7]/1 + '%';
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
