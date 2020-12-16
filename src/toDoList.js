function ToDoList(toDoArray) {
  this.toDoArray = toDoArray;
}

ToDoList.prototype.getTodoAtIndex = function(index){
  return (this.toDoArray[index]);
}

ToDoList.prototype.addTodo = function(todo){
  this.toDoArray.push(todo);
}

export { ToDoList };
