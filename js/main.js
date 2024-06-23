const todoInput = document.querySelector(".input");
const todoButton = document.querySelector(".btn");
const todoList = document.querySelector(".todo-list");
const error = document.querySelector(".error");

todoInput.addEventListener("input", onChange);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Functions
function onChange(event) {
  if (event.target.value.length > 0) {
    todoInput.style.border = "4px solid green";
    error.classList.remove("show-error");
  } else {
    todoInput.style.border = "4px solid #ee6a59";
    error.classList.add("show-error");
  }
}

function addTodo(event) {
  event.preventDefault();
  if (!todoInput.value) {
    error.classList.add("show-error");
    return;
  }

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);


  const completedButton = document.createElement("button");
  completedButton.innerHTML = 'Завершить';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);


  const trashButton = document.createElement("button");
  trashButton.innerHTML = 'Удалить';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
      todo.remove();
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
