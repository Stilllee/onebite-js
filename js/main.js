const addBtn = document.getElementById("add-btn");

// todoList를 저장할 배열 초기화
let todoList = [];
// 로컬 스토리지에서 할 일 목록을 불러오거나 새 배열을 생성
if (localStorage.getItem("todoList")) {
  todoList = JSON.parse(localStorage.getItem("todoList"));
} else {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

// 할 일 추가
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

// 할 일 삭제
const deleteTodoListItem = (id) => {
  const isDelete = window.confirm("정말 삭제하시겠습니까?");
  if (isDelete) {
    let todoList = JSON.parse(localStorage.getItem("todoList"));
    let nowTodoList = todoList.filter((elm) => elm.date !== id);
    localStorage.setItem("todoList", JSON.stringify(nowTodoList));
    document.getElementById(`todo-item-${id}`).remove();
  }
};

// 할 일 상태 토글
const completeToggle = (id) => {
  const todoItem = document.getElementById(`todo-item-${id}`);
  const todoText = todoItem.querySelector("#todo");
  const completeBtn = todoItem.querySelector(".complete-btn");

  const todoIndex = todoList.findIndex((item) => item.date === id);
  todoList[todoIndex].completed = !todoList[todoIndex].completed;

  if (todoList[todoIndex].completed) {
    todoText.style.textDecoration = "line-through";
    completeBtn.style.backgroundColor = "var(--bg)";
    completeBtn.textContent = "취소";
  } else {
    todoText.style.textDecoration = "none";
    completeBtn.style.backgroundColor = "var(--dark-gray)";
    completeBtn.textContent = "완료";
  }

  localStorage.setItem("todoList", JSON.stringify(todoList));
};

// 할 일 DOM에 추가
const setTodoListItem = (todoText, date, completed = false) => {
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
  completeBtn.addEventListener("click", () => completeToggle(date));

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => deleteTodoListItem(date));

  if (completed) {
    todo.style.textDecoration = "line-through";
    completeBtn.style.backgroundColor = "var(--bg)";
    completeBtn.textContent = "취소";
  } else {
    completeBtn.style.backgroundColor = "var(--dark-gray)";
    completeBtn.textContent = "완료";
  }

  todoItem.appendChild(todo);
  todoItem.appendChild(completeBtn);
  todoItem.appendChild(deleteBtn);

  todoList.appendChild(todoItem);
};

// 페이지 로드 시 저장된 할 일 목록을 렌더링
const renderToDoList = () => {
  const storedTodoList = JSON.parse(localStorage.getItem("todoList")) || [];
  storedTodoList.forEach((item) => {
    setTodoListItem(item.todo, item.date, item.completed);
  });
};

addBtn.addEventListener("click", addTodoListItem);

renderToDoList();
