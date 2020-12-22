import Todo from '../todoClass';

test('create todo object and check the truthness of title', () => {
  const todo = new Todo('Todo 1');
  expect(todo.title).toBe('Todo 1');
});

test('create todo object and check the truthness of description', () => {
  const todo = new Todo('hello', 'testing', '5/10/20', 2);
  expect(todo.description).toBe('testing');
});

test('create todo object and check the truthness of date', () => {
  const todo = new Todo('hello', 'testing', '5/10/20', 2);
  expect(todo.duedate).toBe('5/10/20');
});

test('create todo object and check the truthness of priority', () => {
  const todo = new Todo('hello', 'testing', '5/10/20', 2);
  expect(todo.priority).toBe(2);
});

test('create todo object and check the falseness of title', () => {
  const todo = new Todo('hello', 'testing', '5/10/20', 2);
  expect(todo.title).not.toBe('testing');
});
test('create todo object and check the falseness of description', () => {
  const todo = new Todo('hello', 'testing', '5/10/20', 2);
  expect(todo.description).not.toBe(' ');
});
test('create todo object and check the falseness of due date', () => {
  const todo = new Todo('hello', 'testing', '5/10/20', 2);
  expect(todo.duedate).not.toBe('6/10/20');
});
test('create todoo bject and check the falseness of priority', () => {
  const todo = new Todo('hello', 'testing', '5/10/20', 2);
  expect(todo.priority).not.toBe(' ');
});
