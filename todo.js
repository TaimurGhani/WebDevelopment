var todos = [];
var input = prompt("What would you like to do?");
while (input !== "quit") {
	if (input === "new") {
		var newTodo = prompt('Enter a new todo');
		todos.push(newTodo);
		console.log(newTodo + " added to list");
	}
	else if (input === "list") {
		console.log("***********");
		todos.forEach(function(elem, index) {
			console.log(index + ". " + elem);
		});
		console.log("***********");
	}
	else if (input === "delete") {
		var remove = prompt('Enter index to remove');
		todos.splice(remove, 1);
	}
	input = prompt("What would you like to do?");
}
console.log('Ok, you quit the app');
