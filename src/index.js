import _ from 'lodash';
import 'bootstrap';
import './style/main.scss';
import { taskFactory, todoItem } from './factories';
import ToDoList from './toDoList';

const createBtn = document.getElementById('btnCreateTask');

let toDoList;
let currentId = 1;

const getDataFromLocalStorage = () => {
  let li = localStorage.getItem("toDoList");
  if (li != '') {
    // toDoList = new ToDoList(JSON.parse(li));
  }
  else {
    // toDoList = new ToDoList([]);
  }
  console.log(toDoList);
}

getDataFromLocalStorage();

const updateLocalStorage = () => {
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
};

createBtn.addEventListener('click', function () {
  const taskName = document.getElementById('taskName').value;
  const taskModal = document.getElementById('TaskModal');
  let toDo = {
    id: currentId,
    name: taskName,
    todoItems: [],
  }
  // toDoList.addTodo(toDo);
  currentId++;
  updateLocalStorage();
  $('#TaskModal').modal('hide');
});

// [
// {
//   id: 1,
//   name: "project 1",
//   toDoItems: [
//     {},{},{}
//   ]
// },
// {
//   id: 2,
//   name: "project 1",
//   toDoItems: [
//     {},{},{}
//   ]
// }
// ]
