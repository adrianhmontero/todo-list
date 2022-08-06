import { Todo } from ".";

export class TodoList {
  constructor() {
    this.loadLocalStorage();
  }

  newTodo(todo) {
    this.todos.push(todo);
    this.saveLocalStorage();
  }
  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.saveLocalStorage();
  }

  toggleTodo(id) {
    for (const td of this.todos) {
      if (td.id == id) td.completed = !td.completed;
    }
    this.saveLocalStorage();
  }

  deleteCompletedTodos() {
    this.todos = this.todos.filter((todo) => !todo.completed);
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  loadLocalStorage() {
    this.todos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];
    this.todos = this.todos.map(Todo.fromJson);
  }
}
