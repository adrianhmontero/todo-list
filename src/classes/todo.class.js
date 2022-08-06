export class Todo {
  static fromJson({ task, id, completed, createdAt }) {
    const rawToDo = new Todo(task);

    rawToDo.id = id;
    rawToDo.completed = completed;
    rawToDo.createdAt = createdAt;

    return rawToDo;
  }

  constructor(task) {
    this.task = task;
    this.id = new Date().getTime();
    this.completed = false;
    this.createdAt = new Date();
  }
}
