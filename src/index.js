import "./styles.css";
import { Todo, TodoList } from "./classes";

const task = new Todo("Learn JS");
const todoList = new TodoList();

todoList.newTodo(task);

console.log(task, todoList);
