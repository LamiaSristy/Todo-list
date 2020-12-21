const { Project } = require('./projectClass');

// test('create project object and check its value', () => {
//   let project = new Project('hello');
//   expect(project.title).toBe('hello');
//   expect(project.items).toEqual([]);
// });

test('create project object', () => {
  let project = new Project('hello');
  expect(project.title).toBe('hello');
  // expect(project.items).toEqual([]);
});

test('create project object and check its value', () => {
  let project = new Project('hello');
  // expect(project.title).toBe('hello');
  expect(project.items).toEqual([]);
});
