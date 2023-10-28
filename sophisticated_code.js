/* filename: sophisticated_code.js */

// This code demonstrates a complex and sophisticated implementation of a task management system

class Task {
  constructor(id, title, description, dueDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = false;
  }

  complete() {
    this.completed = true;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description, dueDate) {
    const id = this.tasks.length + 1;
    const task = new Task(id, title, description, dueDate);
    this.tasks.push(task);
  }

  getTaskById(taskId) {
    return this.tasks.find(task => task.id === taskId);
  }

  getPendingTasks() {
    return this.tasks.filter(task => !task.completed);
  }

  completeTask(taskId) {
    const task = this.getTaskById(taskId);
    if (task) {
      task.complete();
    }
  }

  getAllTasks() {
    return this.tasks;
  }
}

// Usage example

const taskManager = new TaskManager();

taskManager.addTask("Implement login page", "Create HTML/CSS layout", "2022-02-15");
taskManager.addTask("Design database schema", "Define tables and relationships", "2022-02-10");
taskManager.addTask("Implement user authentication", "Handle login and registration", "2022-02-20");

console.log("All tasks:");
console.log(taskManager.getAllTasks());

console.log("Pending tasks:");
console.log(taskManager.getPendingTasks());

taskManager.completeTask(1);

console.log("Pending tasks after completing task 1:");
console.log(taskManager.getPendingTasks());