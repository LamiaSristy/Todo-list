import 'bootstrap';
import './style/main.scss';

const { deleteToDo, showToDoPanel, selectProject } = require('./logicHelper');

const projectsulEl = document.getElementById('projects-ul');
const todoDisplayEl = document.getElementById('tododisplay');

const showToDoItemInDom = (todo, index) => {
  const todoLiEl = document.createElement('li');
  const title = document.createElement('button');
  const panel = document.createElement('div');
  const divPannel = document.createElement('div');

  const description = document.createElement('p');
  const dueDate = document.createElement('p');
  const proprity = document.createElement('p');
  const deleteTaskBtn = document.createElement('button');

  divPannel.classList.add('row');
  title.classList.add('accordion', 'col-9');
  deleteTaskBtn.classList.add('col-3');
  panel.classList.add('panel');

  const input = document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.id = 'taskHidden';
  input.value = index;
  deleteTaskBtn.classList.add('btn', 'btn-danger', 'btn-small', 'todo-delete');
  deleteTaskBtn.textContent = 'Remove';

  title.textContent = todo.title;
  description.textContent = `${todo.description} is a prority: ${todo.priority} task needs to complete within ${todo.duedate} `;

  panel.appendChild(description);
  panel.appendChild(dueDate);
  panel.appendChild(proprity);

  todoDisplayEl.appendChild(todoLiEl);
  todoLiEl.appendChild(title);
  todoLiEl.appendChild(input);
  todoLiEl.appendChild(deleteTaskBtn);
  todoLiEl.appendChild(panel);

  showToDoPanel(title, panel);
  deleteTaskBtn.addEventListener('click', (e) => deleteToDo(e));
};

const displayTodoList = (project) => {
  todoDisplayEl.innerHTML = '';
  for (let j = 0; j < project.items.length; j += 1) {
    showToDoItemInDom(project.items[j], j);
  }
};

const createNewProject = (project, index) => {
  const liEl = document.createElement('li');
  const lianchorEl = document.createElement('a');
  lianchorEl.textContent = project.title;
  lianchorEl.id = `index-${index}`;

  selectProject(lianchorEl, project, displayTodoList);
  liEl.appendChild(lianchorEl);
  return liEl;
};

const addNewProject = (project, index) => {
  const liEl = createNewProject(project, index);
  projectsulEl.appendChild(liEl);
};


const displayProjects = (projects) => {
  projectsulEl.innerHTML = '';
  for (let i = 0; i < projects.length; i += 1) {
    const liEl = createNewProject(projects[i], i);
    if (i === 0) liEl.getElementsByTagName('a')[0].classList.add('active-project');
    projectsulEl.appendChild(liEl);
  }
};

export { displayProjects, showToDoItemInDom, addNewProject };
