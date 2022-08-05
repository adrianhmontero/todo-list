export class TodoList {
  constructor() {
    this.todos = [];
  }

  newTodo(todo) {
    this.todos.push(todo);
  }
  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
  }

  toggleTodo(id) {
    for (const td of this.todos) {
      if (td.id == id) td.completed = !td.completed;
    }
  }

  deleteCompletedTodos() {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }
}
