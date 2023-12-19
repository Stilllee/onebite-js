const addBtn = document.getElementById("add-btn");

let todoList = [];
if (localStorage.getItem("todoList")) {
  todoList = JSON.parse(localStorage.getItem("todoList"));
} else {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

const addTodoListItem = () => {
  let todoList = [];
  if (localStorage.getItem("todoList")) {
    todoList = JSON.parse(localStorage.getItem("todoList"));
  }

  let todoText = document.getElementById("todo-input").value;
  let date = Date.now();
  todoList.push({ todo: todoText, date: date });
  localStorage.setItem("todoList", JSON.stringify(todoList));
  document.getElementById("todo-input").value = "";
  setTodoListItem(todoText, date);
};

const setTodoListItem = (todoText, date) => {
  const todoList = document.getElementById("todo-list");

  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-list-item");

  const todo = document.createElement("div");
  todo.classList.add("todo");
  todo.id = "todo";
  todo.textContent = todoText;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "완료";
  completeBtn.classList.add("complete-btn");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.classList.add("delete-btn");

  todoItem.appendChild(todo);
  todoItem.appendChild(completeBtn);
  todoItem.appendChild(deleteBtn);

  todoList.appendChild(todoItem);
};

addBtn.addEventListener("click", addTodoListItem);
