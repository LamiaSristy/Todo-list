class Todo {
    constructor(title, description = '', duedate = '', priority) {
      this.title = title;
      this.description = description;
      this.duedate = duedate;
      this.priority = priority;
    }
  }
  
  module.exports = {
    Todo,
  };