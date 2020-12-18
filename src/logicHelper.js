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

const editTask = (editTaskBtn, todo, index) => {
  editTaskBtn.addEventListener('click', () => {
    const taskName = document.getElementById('editTaskName');
    const description = document.getElementById('editTaskDescription');
    const dueDate = document.getElementById('editTaskDueDate');
    const priority = document.getElementById('editTaskPriority');
    const editTaskIndex = document.getElementById('taskIndex');
    editTaskIndex.value = index;

    taskName.value = todo.title;
    description.value = todo.description;
    dueDate.value = todo.duedate;
    priority.value = todo.priority;
  });
};

module.exports = {
  deleteToDo, showToDoPanel, selectProject, editTask,
};
