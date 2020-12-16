import _ from 'lodash';
import 'bootstrap';
import './style/main.scss';
import { taskFactory, todoItem } from './factories';
import ToDoList from './toDoList';

const { Project } = require('./projectClass');
const { Todo } = require('./todoClass');


const createBtn = document.getElementById('btnCreateTask');
const projectsulEl = document.getElementById('projects-ul');

const toDoList = [];

function setDefaults() {
  const retrieved = JSON.parse(localStorage.getItem('todolist'));
  if (!retrieved) {
    const project1 = new Project('Test');
    const todo1 = new Todo('First thing to do ..', 'your description', 12, 1);
    const todo2 = new Todo('Second thing todo ...', 'your second description', 12, 2);
    project1.items.push(todo1);
    project1.items.push(todo2);
    toDoList.push(project1);
    localStorage.setItem('todolist', JSON.stringify(toDoList));
  }
}
setDefaults();


// const createBtn = document.getElementById('btnCreateTask');

// let toDoList;
let currentId = 1;

// const getDataFromLocalStorage = () => {
//   let li = localStorage.getItem("toDoList");
//   if (li != '') {
//     //toDoList = new ToDoList(JSON.parse(li));
//   }
//   else {
//     //toDoList = new ToDoList([]);
//   }
//   console.log(toDoList);
// }

// getDataFromLocalStorage();

// const updateLocalStorage = () => {
//   localStorage.setItem("toDoList", JSON.stringify(toDoList));
// };

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
