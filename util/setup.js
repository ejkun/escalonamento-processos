var lista1Arr = new ObservableRoundRobin();
var lista2Arr = new ObservableRoundRobin();
var lista3Arr = new ObservableRoundRobin();
var lista4Arr = new ObservableRoundRobin();

var lista1Ul = $("#lista-1");
var lista2Ul = $("#lista-2");
var lista3Ul = $("#lista-3");
var lista4Ul = $("#lista-4");

lista1Arr.addEventListener("itemadded", function (e) {
	lista1Ul.append("<li class='list-group-item list-group-item-danger'>"+e.item+"</li>")
});

lista2Arr.addEventListener("itemadded", function (e) {
	lista2Ul.append("<li class='list-group-item list-group-item-danger'>"+e.item+"</li>")
});

lista3Arr.addEventListener("itemadded", function (e) {
	lista3Ul.append("<li class='list-group-item list-group-item-danger'>"+e.item+"</li>")
});

lista4Arr.addEventListener("itemadded", function (e) {
	lista4Ul.append("<li class='list-group-item list-group-item-danger'>"+e.item+"</li>")
});

lista1Arr.addEventListener("itemremoved", function (e) {
	lista1Ul.children().eq(e.index).remove();
});

lista2Arr.addEventListener("itemremoved", function (e) {
	lista2Ul.children().eq(e.index).remove();
});

lista3Arr.addEventListener("itemremoved", function (e) {
	lista3Ul.children().eq(e.index).remove();
});

lista4Arr.addEventListener("itemremoved", function (e) {
	lista4Ul.children().eq(e.index).remove();
});

jQuery.fn.extend({
	textQuantum: function (quantum) {
		$(this).text("- Quantum "+quantum);
		$(this).data('val', quantum);
	}
});

$("#quantum-l1").textQuantum(Math.floor(Math.random() * 5) + 2);
$("#quantum-l2").textQuantum(Math.floor(Math.random() * 5) + 6);
$("#quantum-l3").textQuantum(Math.floor(Math.random() * 5) + 10);
$("#quantum-l4").textQuantum(Math.floor(Math.random() * 5) + 14);

