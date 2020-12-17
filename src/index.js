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
    // lianchorEl.id = lianchorEl.textContent;
    todoDisplayEl.innerHTML = '';
    for (let j = 0; j < project.items.length; j += 1) {
      const todoLiEl = document.createElement('li');
      const title = document.createElement('button');
      const panel = document.createElement('div');
      const description = document.createElement('p');

      title.classList.add('accordion');
      panel.classList.add('panel');

      title.textContent = project.items[j].title;
      description.textContent = project.items[j].description;

      panel.appendChild(description);

      todoDisplayEl.appendChild(todoLiEl);
      todoLiEl.appendChild(title);
      todoLiEl.appendChild(panel);

      title.addEventListener('click', () => {
        title.classList.toggle("active");

        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
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

  //  console.log(projects);
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
  console.log(projects);
  $('#taskModal').modal('hide');
});
