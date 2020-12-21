const { Todo } = require('./todoClass');

test('create todoobject and check its value', () => {
  let todo = new Todo('hello', 'testing', '5/10/20', 2);
  expect(todo.title).toBe('hello');
  expect(todo.description).toBe('testing');
  expect(todo.duedate).toBe('5/10/20');
  expect(todo.priority).toBe(2);
});
