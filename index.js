var ctx = document.getElementById('chart').getContext('2d');

var data = {
	datasets: [
	]
};
var options = {
	title: {
		display: true,
		text: "Gráfico de Escalonamento"
	},
	responsive: true,
	scales: {
		xAxes: [{
			display: true,
			type: 'linear',
			ticks: {
				beginAtZero: true,
				stepSize: 1,
				suggestedMax: 15
			},
		}],
		yAxes: [{
			scaleLabel: {
				display: true,
				labelString: 'Processador'
			},
			stacked: true
		}]
	}
};

for (j = 1; j < 10; j++) {
	listas.push({id: j-1, name:"Processo " + j, quantum:generateQuantum()});
	data.datasets[j-1] = {
		'label': "Processo " + j,
		'backgroundColor': getRandomColor()
	}
}

var processadorChart = new Chart(ctx, {
	'type': 'horizontalBar',
	'data': data,
	'options': options
});