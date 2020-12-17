import _ from 'lodash';
import 'bootstrap';
import './style/main.scss';

const { Project } = require('./projectClass');
const { Todo } = require('./todoClass');


const createProjectBtn = document.getElementById('btnCreateProject');
const projectsulEl = document.getElementById('projects-ul');
const todoDisplayEl = document.getElementById('tododisplay');
const btnAddTask = document.getElementById('btnAddTask');
const projectIndexTask = document.getElementById('projectIndexTask');
const btnCreateTask = document.getElementById('btnCreateTask');

let projects = [];

function setDefaults() {
  const retrieved = JSON.parse(localStorage.getItem('todolist'));
  if (!retrieved) {
    const project1 = new Project('Test');
    const todo1 = new Todo('First ToDo', 'your first description', 12, 1);
    const todo2 = new Todo('Second ToDo', 'your second description', 12, 2);
    project1.items.push(todo1);
    project1.items.push(todo2);
    projects.push(project1);
    localStorage.setItem('todolist', JSON.stringify(projects));
  }
}
setDefaults();


const deleteToDo = (e) => {
  let projectIndex = document.getElementById('projectIndexTask').value;
  projectIndex = parseInt(projectIndex);
  let toDoIndex = e.srcElement.previousSibling.value;
  let parentli = e.srcElement.parentNode;
  console.log(projects[projectIndex]);
  projects[projectIndex].items.splice(toDoIndex, 1);
  console.log(projects[projectIndex]);
  updateLocalStorage();
  parentli.remove();
}

const showToDoItemInDom = (todo, index) => {
  const todoLiEl = document.createElement('li');
  const title = document.createElement('button');
  const panel = document.createElement('div');
  const divPannel = document.createElement('div');
  const description = document.createElement('p');
  const deleteTaskBtn = document.createElement('button');

  divPannel.classList.add('row');
  title.classList.add('accordion', 'col-9');
  deleteTaskBtn.classList.add('col-3');
  panel.classList.add('panel');

  const input = document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.id = "taskHidden";
  input.value = index;
  deleteTaskBtn.classList.add('btn', 'btn-danger');
  deleteTaskBtn.textContent = 'Remove';

  title.textContent = todo.title;
  description.textContent = todo.description;
  panel.appendChild(description);

  todoDisplayEl.appendChild(todoLiEl);
  todoLiEl.appendChild(title);
  todoLiEl.appendChild(input);
  todoLiEl.appendChild(deleteTaskBtn);
  todoLiEl.appendChild(panel);

  title.addEventListener('click', () => {
    title.classList.toggle("active");
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

  deleteTaskBtn.addEventListener('click', (e) => deleteToDo(e));
}

const createNewProject = (project, index) => {
  const liEl = document.createElement('li');
  const lianchorEl = document.createElement('a');
  lianchorEl.textContent = project.title;
  lianchorEl.id = `index-${index}`;

  lianchorEl.addEventListener('click', (e) => {
    document.querySelector(".active-project").classList.remove('active-project');
    projectIndexTask.value = (e.srcElement.id).split('-')[1];
    lianchorEl.classList.add('active-project');
    document.getElementById('createTaskDiv').classList.add('d-block');

    todoDisplayEl.innerHTML = '';
    for (let j = 0; j < project.items.length; j += 1) {
      showToDoItemInDom(project.items[j], j);
    }
  });

  liEl.appendChild(lianchorEl);
  return liEl;
};

const getDataFromLocalStorage = () => {
  projects = JSON.parse(localStorage.getItem('todolist'));
  projectsulEl.innerHTML = '';
  for (let i = 0; i < projects.length; i += 1) {
    let liEl = createNewProject(projects[i], i);
    if (i == 0) liEl.getElementsByTagName('a')[0].classList.add('active-project');
    projectsulEl.appendChild(liEl);
  }
}

getDataFromLocalStorage();

const updateLocalStorage = () => {
  localStorage.setItem("todolist", JSON.stringify(projects));
};

createProjectBtn.addEventListener('click', function () {
  const projectName = document.getElementById('projectName').value;
  const newProject = new Project(projectName);

  console.log(projects.length);
  projects.push(newProject);
  updateLocalStorage();
  $('#projectModal').modal('hide');
  createNewProject(newProject, projects.length - 1);
});

btnCreateTask.addEventListener('click', function () {
  let taskName = document.getElementById('taskName').value;
  let description = document.getElementById('description').value;
  let dueDate = document.getElementById('dueDate').value;
  let priority = document.getElementById('priority').value;

  let toDo = new Todo(taskName, description, dueDate, priority);
  let projectIndex = projectIndexTask.value;
  projects[projectIndex].items.push(toDo);
  updateLocalStorage();
  let todoIndex = projects[projectIndex].items.length - 1;
  showToDoItemInDom(toDo, todoIndex);
  $('#taskModal').modal('hide');
});
