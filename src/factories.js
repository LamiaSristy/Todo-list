const taskFactory = (id, name) => {
  return { id ,name };
};

const todoItem = (id, task_id, status, description) => {
  return {id, task_id, status, description};
};

export {taskFactory, todoItem};
