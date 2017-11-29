function bonus() {
  	var valores = [-1, -1, 0, 0, 0, 0, 0, 0, 1, 1];
  	var indice = Math.floor(Math.random() * valores.length);
	return valores[indice];
}

jQuery.fn.extend({
	textQuantum: function (quantum) {
		$(this).text("- Quantum "+quantum);
		$(this).data('val', quantum);
	}
});

labels = {
	1: "danger",
	2: "warning",
	3: "success",
	4: "info"
};

var quantumProcessador = 2;

var listas = {};

for (i = 1; i <= 4; i++) {
	listas[i] = {
		arr: new ObservableRoundRobin(),
		ul: $("#lista-"+i),
		quantumElement: $("#quantum-l"+i),
		length: function () {
			return this.arr.length;
		},
		shift: function () {
			return this.arr.shift();
		},
		quantum: function () {
			return this.quantumElement.data('val');
		}
	};

	listas[i].quantumElement.textQuantum(Math.floor(Math.random() * 5) + i*4);

	listas[i].arr.addEventListener("itemadded", function (e) {
		listas[e.item.fila].ul.append("<li class='list-group-item list-group-item-"+labels[e.item.fila]+"'>"+ e.item.name + " - Q:" + e.item.quantum +"</li>");
	});

	listas[i].arr.addEventListener("itemremoved", function (e) {
		listas[e.item.fila].ul.children().eq(e.index).remove();
		if (e.item.quantum > quantumProcessador) {
			e.item.quantum -= quantumProcessador;
			listas.push(e.item, bonus());
		}
	});
}

listas.process = function () {
	for (i = 1; i <= 4; i++) {
		if (this[i].length() > 0) {
			return this[i].shift();
		}
	}
	return false;
};

listas.push = function (processo, bonus) {
	if (typeof bonus === 'undefined') { bonus = 0; }
	for (i = 1; i <= 3; i++) {
		if (processo.quantum <= this[i].quantum()) {
			processo.fila = i - bonus;
			if (bonus === -1) {
				console.log(processo.name + " foi gratificado");
			}
			if (bonus === 1) {
				console.log(processo.name + " foi penalizado");
			}
			this[processo.fila].arr.push(processo);
			return true;
		}
	}
	processo.fila = i;
	this[i].arr.push(processo);
	return true;
}

function generateQuantum() {
	return Math.floor(Math.random() * 20) + 1;
}