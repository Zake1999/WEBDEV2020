
var a = 1;
function addToDoElement(){
	var todo = document.getElementById("in_todo");
	var td1 = document.createElement("input");
	td1.type = "checkbox"; //
	td1.id = "chk"+a;
	var td2 = document.getElementById("in_todo").value; //text
	var txt = document.createElement("p");
	txt.id = "item_text";
	td1.onclick = function check_changed(){
		var parent = this.parentNode.id;
		var txt = document.getElementById(parent).querySelector("#item_text");
		if (this.checked){
			txt.style.textDecoration = "line-through";
		}
		else{
			txt.style.textDecoration = "none";
		}
	}
	if (td2 == ""){
		alert("Please, fill the ToDo List Item!");
		return;
	}
	txt.innerHTML = td2;
	var td3 = document.createElement("button");
	td3.id = "delete"; // button
	td3.onclick = function deleteToDo()
	{
		var child = this.parentNode.id;
		if(confirm("Delete " + td2 + " ?"))
			document.getElementById(child).remove();
	}
	var toDoElement = document.createElement("div");
	toDoElement.id = "added" + a;
	a = a + 1;
	toDoElement.appendChild(td1);
	toDoElement.appendChild(txt);
	toDoElement.appendChild(td3);
	var todolist = document.getElementById("todolist");
	todolist.appendChild(toDoElement);
	todo.value = "";
}
function deleteToDo(element){
	var child = element.parentNode.id;
	document.getElementById(child).remove();
}
function deleteall(){
	var all_boxes = document.getElementById("todolist").getElementsByTagName("input");
	for(var i = 0; i < all_boxes.length; i++)
		if (all_boxes[i].type == "checkbox" && all_boxes[i].checked == true){
			deleteToDo(all_boxes[i]);
			i--;
		}
}