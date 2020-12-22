import { getDataFromLocalStorage, updateLocalStorage } from '../helper';

test('Returns projects which is null initially', () => {
  expect(getDataFromLocalStorage('projects')).toBeNull();
});

test('Upload Localstorage', () => {
  const projects = [];
  updateLocalStorage(projects);
  expect(updateLocalStorage('projects')).toBeUndefined();
});

test('Check the Key for local storage', () => {
  localStorage.setItem.key = 'todolist';
  expect(localStorage.setItem.key).toEqual('todolist');
});

test('Upload Localstorage', () => {
  localStorage.setItem.value = 'project';
  expect(localStorage.setItem.value).toEqual('project');
});
