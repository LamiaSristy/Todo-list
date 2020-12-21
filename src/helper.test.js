const {getDataFromLocalStorage, updateLocalStorage } = require('./helper');

test("Returns projects which is null initially", () => {  
    expect(getDataFromLocalStorage('projects')).toBe(null);
});

test("Upload Localstorage", () => {
    let projects = [];
    updateLocalStorage(projects);
    expect(updateLocalStorage('projects')).toBe(undefined);
});

test("Check the Key for local storage", () => {
    localStorage.setItem.key = 'todolist';
    expect(localStorage.setItem.key).toEqual('todolist'); 
});

test("Upload Localstorage", () => {
    let projects = [];
    localStorage.setItem.value = 'project'
    expect(localStorage.setItem.value).toEqual('project');  
});