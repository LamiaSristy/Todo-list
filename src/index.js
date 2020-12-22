import 'bootstrap';
import './style/main.scss';
import {
  displayProjects, showToDoItemInDom, addNewProject, displayTodoList,
} from './domHelper';

import Project from './projectClass';
import Todo from './todoClass';
import { getDataFromLocalStorage, updateLocalStorage } from './helper';


const createProjectBtn = document.getElementById('btnCreateProject');
const projectIndexTask = document.getElementById('projectIndexTask');
const btnCreateTask = document.getElementById('btnCreateTask');
const btnEditTask = document.getElementById('btnEditTask');

let projects = [];

function setDefaults() {
  const retrieved = getDataFromLocalStorage();
  if (!retrieved) {
    const project1 = new Project('Test');
    const todo1 = new Todo('First ToDo', 'your first description', 12, 1);
    const todo2 = new Todo('Second ToDo', 'your second description', 12, 2);
    project1.items.push(todo1);
    project1.items.push(todo2);
    projects.push(project1);
    updateLocalStorage(projects);
  }
}
setDefaults();

displayProjects(getDataFromLocalStorage());

createProjectBtn.addEventListener('click', () => {
  const projectName = document.getElementById('projectName').value;
  const newProject = new Project(projectName);
  projects = getDataFromLocalStorage();
  projects.push(newProject);
  updateLocalStorage(projects);
  $('#projectModal').modal('hide');
  addNewProject(newProject, projects.length - 1);
});

btnCreateTask.addEventListener('click', () => {
  const taskName = document.getElementById('taskName').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('dueDate').value;
  const priority = document.getElementById('priority').value;

  const toDo = new Todo(taskName, description, dueDate, priority);
  const projectIndex = projectIndexTask.value;
  projects = getDataFromLocalStorage();
  projects[projectIndex].items.push(toDo);
  updateLocalStorage(projects);
  const todoIndex = projects[projectIndex].items.length - 1;
  showToDoItemInDom(toDo, todoIndex);
  $('#taskModal').modal('hide');
});

btnEditTask.addEventListener('click', () => {
  const editTaskName = document.getElementById('editTaskName').value;
  const editDescription = document.getElementById('editTaskDescription').value;
  const editDueDate = document.getElementById('editTaskDueDate').value;
  const editpPriority = document.getElementById('editTaskPriority').value;
  const editTaskIndex = document.getElementById('taskIndex').value;

  const toDo = new Todo(editTaskName, editDescription, editDueDate, editpPriority);

  const projectIndex = projectIndexTask.value;

  projects = getDataFromLocalStorage();
  projects[projectIndex].items[editTaskIndex] = toDo;
  updateLocalStorage(projects);
  displayTodoList(projects[projectIndex]);
  $('#editTaskModal').modal('hide');
});
