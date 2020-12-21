const { Todo } = require('./todoClass');

// test('create todoobject and check its value', () => {
//   let todo = new Todo('hello', 'testing', '5/10/20', 2);
//   expect(todo.title).toBe('hello');
//   expect(todo.description).toBe('testing');
//   expect(todo.duedate).toBe('5/10/20');
//   expect(todo.priority).toBe(2);
// });

test('create todoobject and check its value', () => {
  let todo = new Todo('Todo 1');
  expect(todo.title).toBe('Todo 1');  
});
test('create todoobject and check its value', () => {
  let todo = new Todo('hello', 'testing', '5/10/20', 2);
  expect(todo.description).toBe('testing');  
});

test('create todoobject and check its value', () => {
  let todo = new Todo('hello', 'testing', '5/10/20', 2);
  expect(todo.duedate).toBe('5/10/20');
});
test('create todoobject and check its value', () => {
  let todo = new Todo('hello', 'testing', '5/10/20', 2);
  expect(todo.priority).toBe(2);
});

test('create todoobject and check its value', () => {
  let todo = new Todo('hello', 'testing', '5/10/20', 2);
  expect(todo.title).not.toBe('testing'); 
});
test('create todoobject and check its value', () => {
  let todo = new Todo('hello', 'testing', '5/10/20', 2); 
  expect(todo.description).not.toBe(' '); 
});
test('create todoobject and check its value', () => {
  let todo = new Todo('hello', 'testing', '5/10/20', 2); 
  expect(todo.duedate).not.toBe('6/10/20'); 
});
test('create todoobject and check its value', () => {
  let todo = new Todo('hello', 'testing', '5/10/20', 2); 
  expect(todo.priority).not.toBe(' '); 
});
