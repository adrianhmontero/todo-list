// HTML Refs

import { todoList } from "..";
import { Todo } from "../classes";

const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");

export const createTodoHtml = (todo) => {
  const todoHtml = `
  <li class="${todo?.completed && "completed"}" data-id="${todo?.id}">
  <div class="view">
      <input class="toggle" type="checkbox" ${todo?.completed && "checked"}>
      <label>${todo?.task}</label>
      <button class="destroy"></button>
  </div>
  <input class="edit" value="Create a TodoMVC template">
</li>`;

  const div = document.createElement("div");
  div.innerHTML = todoHtml;
  divTodoList.append(div.firstElementChild);

  return div;
};

// EVENTS
txtInput.addEventListener("keyup", ({ keyCode, target: { value } }) => {
  console.log({ keyCode, value, todoList });
  // IF user pressed 'Enter' key & value exists & is not repeated
  if (keyCode === 13 && value) {
    if (todoList?.todos.every((td) => td?.task != value)) {
      const newTodo = new Todo(value);
      todoList.newTodo(newTodo);
      createTodoHtml(newTodo);
      txtInput.value = "";
    } else {
      txtInput.value = "";
    }
  }
});
