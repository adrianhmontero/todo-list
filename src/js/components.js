// HTML Refs

import { todoList } from "..";
import { Todo } from "../classes";

const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const btnDeleteAll = document.querySelector(".clear-completed");
const ulFilters = document.querySelector(".filters");
const anchorFilters = document.querySelectorAll(".filtro");

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

//add toDo
txtInput.addEventListener("keyup", ({ keyCode, target: { value } }) => {
  // IF user pressed 'Enter' key & value exists
  if (keyCode === 13 && value) {
    //IF todo is not repeated
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

divTodoList.addEventListener("click", ({ target }) => {
  const elementName = target.localName;
  const todoElement = target.parentElement.parentElement;
  const todoId = todoElement.getAttribute("data-id");

  // Toggle toDo
  if (elementName === "input") {
    todoList.toggleTodo(todoId);
    todoElement.classList.toggle("completed");
  }
  // Delete toDo
  if (elementName === "button") {
    todoList.deleteTodo(todoId);
    divTodoList.removeChild(todoElement);
  }
});

// Delete all completed toDos
btnDeleteAll.addEventListener("click", () => {
  todoList.deleteCompletedTodos();
  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const element = divTodoList.children[i];
    if (element.classList.contains("completed")) element.remove();
  }
});

// Manage filters
ulFilters.addEventListener("click", (event) => {
  const filter = event.target.text;
  if (!filter) return;
  anchorFilters.forEach((elem) => elem.classList.remove("selected"));
  event.target.classList.add("selected");

  for (const element of divTodoList.children) {
    element.classList.remove("hidden");
    const completed = element.classList.contains("completed");
    switch (filter) {
      case "Pendientes":
        if (completed) element.classList.add("hidden");
        break;
      case "Completados":
        if (!completed) element.classList.add("hidden");
      default:
        break;
    }
  }
});
