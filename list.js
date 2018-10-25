var todos =["buy egg"];

var input =prompt("what would you like to do");

while(input!=="quit"){
	if (input==="list") {
		console.log("*********")
		 todos.forEach(function(todo,i){
		 console.log(i +":"+todo);	
		 });
		console.log("*********") 
		
	}else if (input==="new") {
		var newTodo=prompt("enter new todo")
		todos.push(newTodo);
	}else if (input==="delete") {
		var index=prompt("enter index to be removed");
		//delete that todo
		// use splice()
		todos.splice(index,1);
	}

	input =prompt("what would you like to do");
}
console.log("ok ,you quit the app");