
cpuSpeedValue = 0;

var randomScalingFactor = function() {
	socket.on('message', function(data){

	//console.log('CPU usage value every second', data)

	cpuSpeedValue = data;

	data2 = cpuSpeedValue/1000

	var data3 = parseFloat(data2).toPrecision(4);// decimal places
	var num2string = data3.toString();
	document.getElementById("log").innerHTML = num2string + 'GHz';
	//cpuUsageValue;
	document.getElementById("log2").innerHTML = num2string + 'GHz';
	document.getElementById("log3").innerHTML = num2string + 'GHz';
	document.getElementById("log4").innerHTML = num2string + 'GHz';
	document.getElementById("log5").innerHTML = num2string + 'GHz';
	document.getElementById("log6").innerHTML = num2string + 'GHz';
	document.getElementById("log7").innerHTML = num2string + 'GHz';
	document.getElementById("log8").innerHTML = num2string + 'GHz';
	//document.getElementById("log9").innerHTML = num2string + 'GHz';
		})
			return cpuSpeedValue/4000;
	};
