import Project from '../projectClass';

test('create project object and checks the truthness of title', () => {
  const project = new Project('hello');
  expect(project.title).toBe('hello');
});

test('create project object and check the falseness of title', () => {
  const project = new Project('hello');
  expect(project.title).not.toBe(' ');
});

test('create project object and check the value of items array', () => {
  const project = new Project('hello');
  expect(project.items).toEqual([]);
});
