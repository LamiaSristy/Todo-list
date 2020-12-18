const { getDataFromLocalStorage, updateLocalStorage } = require('./helper');

const deleteToDo = (e) => {
  let projectIndex = document.getElementById('projectIndexTask').value;
  projectIndex = +projectIndex;
  const toDoIndex = e.srcElement.previousSibling.value;
  const parentli = e.srcElement.parentNode;
  const projects = getDataFromLocalStorage();
  projects[projectIndex].items.splice(toDoIndex, 1);
  updateLocalStorage(projects);
  parentli.remove();
};

const showToDoPanel = (title, panel) => {
  title.addEventListener('click', () => {
    title.classList.toggle('active');
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
};

const selectProject = (lianchorEl, project, displayTodoList) => {
  lianchorEl.addEventListener('click', (e) => {
    document.querySelector('.active-project').classList.remove('active-project');
    const projectIndexTask = document.getElementById('projectIndexTask');
    projectIndexTask.value = (e.srcElement.id).split('-')[1];
    lianchorEl.classList.add('active-project');
    document.getElementById('createTaskDiv').classList.add('d-block');
    displayTodoList(project);
  });
};

module.exports = {
  deleteToDo, showToDoPanel, selectProject,
};
