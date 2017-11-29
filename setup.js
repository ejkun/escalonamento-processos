jQuery.fn.extend({
	textQuantum: function (quantum) {
		$(this).text("- Quantum "+quantum);
		$(this).data('val', quantum);
	}
});

var quantumProcessador = 2;

var listas = {};

for (i = 1; i <= 4; i++) {
	listas[i] = {
		arr: new ObservableRoundRobin(),
		ul: $("#lista-"+i),
		quantum: $("#quantum-l"+i)
	};

	listas[i].quantum.textQuantum(Math.floor(Math.random() * 5) + i*4);

	listas[i].arr.addEventListener("itemadded", function (e) {
		listas[e.item.list].ul.append("<li class='list-group-item list-group-item-danger'>"+ e.item.name + " - Q:" + e.item.quantum +"</li>");
	});

	listas[i].arr.addEventListener("itemremoved", function (e) {
		listas[e.item.list].ul.children().eq(e.index).remove();
		if (e.item.quantum > quantumProcessador) {
			e.item.quantum -= quantumProcessador;
			listas[e.item.list].arr.push(e.item);
		}
	});
}

function push(object) {
	return listas[object.list].arr.push(object)
}

function shift(list) {
	return listas[list].arr.shift();
}