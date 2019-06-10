		var config = {
		 type: "radialGauge",
		 data: {
		  labels: ["Metrics"],
		  datasets: [
		   {
			data: [randomScalingFactor()],
			backgroundColor: 'rgb(255, 0, 0)',
			borderWidth: 0,
		   }
		  ]
		 },
		 options: {
		  responsive: false,
		  legend: {},
		  title: {
		   display: true,
		   text: "CPU speed"
		  },
		  //this is where we can comment in/out features from Chart.RadialGauge.umd.js
		  centerPercentage: 80, //how big the inner circle space is
		  roundedCorners: false,
		  trackColor: 'rgb(255, 255, 255)', //circle behind gauge circle
		 }
		};
