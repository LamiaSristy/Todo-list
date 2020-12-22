let projects = [];

const getDataFromLocalStorage = () => {
  projects = JSON.parse(localStorage.getItem('todolist'));
  return projects;
};

const updateLocalStorage = (projects) => {
  localStorage.setItem('todolist', JSON.stringify(projects));
};

export {
  getDataFromLocalStorage, updateLocalStorage,
};