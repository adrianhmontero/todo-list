import "./styles.css";
import { /*  Todo, */ TodoList } from "./classes";
import { createTodoHtml } from "./js/components";

export const todoList = new TodoList();

todoList.todos.forEach(createTodoHtml);

/* const task = new Todo("Learn JS");
todoList.newTodo(task);
createTodoHtml(task); */

console.log(todoList);
