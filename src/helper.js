let projects = [];

const getDataFromLocalStorage = () => {
  if (projects.length < 1) projects = JSON.parse(localStorage.getItem('todolist'));
  return projects;
};

const updateLocalStorage = (projects) => {
  localStorage.setItem('todolist', JSON.stringify(projects));
};

module.exports = {
  getDataFromLocalStorage, updateLocalStorage,
};