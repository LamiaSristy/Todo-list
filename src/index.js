import 'bootstrap';
import './style/main.scss';
import { displayProjects, showToDoItemInDom, addNewProject } from './domHelper';

const { Project } = require('./projectClass');
const { Todo } = require('./todoClass');
const { getDataFromLocalStorage, updateLocalStorage } = require('./helper');


const createProjectBtn = document.getElementById('btnCreateProject');
const projectIndexTask = document.getElementById('projectIndexTask');
const btnCreateTask = document.getElementById('btnCreateTask');

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
