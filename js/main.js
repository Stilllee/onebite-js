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

const deleteTodoListItem = (id) => {
  const isDelete = window.confirm("정말 삭제하시겠습니까?");
  if (isDelete) {
    let todoList = JSON.parse(localStorage.getItem("todoList"));
    let nowTodoList = todoList.filter((elm) => elm.date !== id);
    localStorage.setItem("todoList", JSON.stringify(nowTodoList));
    document.getElementById(`todo-item-${id}`).remove();
  }
};

const setTodoListItem = (todoText, date) => {
  const todoList = document.getElementById("todo-list");

  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-list-item");
  todoItem.id = `todo-item-${date}`;

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
  deleteBtn.addEventListener("click", () => deleteTodoListItem(date));

  todoItem.appendChild(todo);
  todoItem.appendChild(completeBtn);
  todoItem.appendChild(deleteBtn);

  todoList.appendChild(todoItem);
};

const renderToDoList = () => {
  const storedTodoList = JSON.parse(localStorage.getItem("todoList")) || [];
  storedTodoList.forEach((item) => {
    setTodoListItem(item.todo, item.date);
  });
};

addBtn.addEventListener("click", addTodoListItem);

renderToDoList();
