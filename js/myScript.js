

		Chart.defaults.global.defaultFontFamily = "Verdana";



		window.onload = function() {
		 var ctx0 = document.getElementById("chart-area").getContext("2d");
		 var ctx1 = document.getElementById("chart-area2").getContext("2d");
		 var ctx2 = document.getElementById("chart-area3").getContext("2d");
		 var ctx3 = document.getElementById("chart-area4").getContext("2d");
		 var ctx4 = document.getElementById("chart-area5").getContext("2d");
		 var ctx5 = document.getElementById("chart-area6").getContext("2d");
		 var ctx6 = document.getElementById("chart-area7").getContext("2d");
		 var ctx7 = document.getElementById("chart-area8").getContext("2d");

		 window.myRadialGauge0 = new Chart(ctx0, configRed);
		 window.myRadialGauge1 = new Chart(ctx1, configOrange);
		 window.myRadialGauge2 = new Chart(ctx2, configYellow);
		 window.myRadialGauge3 = new Chart(ctx3, configCyan);
		 window.myRadialGauge4 = new Chart(ctx4, configBlue);
		 window.myRadialGauge5 = new Chart(ctx5, configGreen);
		 window.myRadialGauge6 = new Chart(ctx6, configBlack);
		 window.myRadialGauge7 = new Chart(ctx7, configGrey);
		};

		setInterval(function () {document.getElementById("randomizeData").click();}, 300);
		document.getElementById("randomizeData").addEventListener("click", function() {

		 configRed.data.datasets.forEach(function(dataset) {
		  dataset.data = dataset.data.map(function() {
		   return randomScalingFactor();
		  });
		 });

		 configOrange.data.datasets.forEach(function(dataset) {
		  dataset.data = dataset.data.map(function() {
		   return randomScalingFactor();
		  });
		 });

		 configYellow.data.datasets.forEach(function(dataset) {
		  dataset.data = dataset.data.map(function() {
		   return randomScalingFactor();
		  });
		 });

		 configCyan.data.datasets.forEach(function(dataset) {
		  dataset.data = dataset.data.map(function() {
		   return randomScalingFactor();
		  });
		 });

		 configBlue.data.datasets.forEach(function(dataset) {
		  dataset.data = dataset.data.map(function() {
		   return randomScalingFactor();
		  });
		 });

		 configGreen.data.datasets.forEach(function(dataset) {
		  dataset.data = dataset.data.map(function() {
		   return randomScalingFactor();
		  });
		 });

		 configBlack.data.datasets.forEach(function(dataset) {
		  dataset.data = dataset.data.map(function() {
		   return randomScalingFactor();
		  });
		 });

		 configGrey.data.datasets.forEach(function(dataset) {
		  dataset.data = dataset.data.map(function() {
		   return randomScalingFactor();
		  });
		 });

		 window.myRadialGauge0.update();
		 window.myRadialGauge1.update();
		 window.myRadialGauge2.update();
		 window.myRadialGauge3.update();
		 window.myRadialGauge4.update();
		 window.myRadialGauge5.update();
		 window.myRadialGauge6.update();
		 window.myRadialGauge7.update();
		});
