const addBtn = document.getElementById("add-btn");

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
let completedList = JSON.parse(localStorage.getItem("completedList")) || [];

// 할 일 추가
const addTodoListItem = () => {
  let todoText = document.getElementById("todo-input").value;
  let date = Date.now();
  todoList.push({ todo: todoText, date: date, completed: false });
  localStorage.setItem("todoList", JSON.stringify(todoList));
  document.getElementById("todo-input").value = "";
  renderToDoList();
};

// 할 일 삭제
const deleteTodoListItem = (id) => {
  const isDelete = window.confirm("정말 삭제하시겠습니까?");
  if (isDelete) {
    let todoIndex = todoList.findIndex((item) => item.date === id);
    let completedIndex = completedList.findIndex((item) => item.date === id);

    if (todoIndex >= 0) {
      todoList.splice(todoIndex, 1);
      localStorage.setItem("todoList", JSON.stringify(todoList));
    } else if (completedIndex >= 0) {
      completedList.splice(completedIndex, 1);
      localStorage.setItem("completedList", JSON.stringify(completedList));
    }
    document.getElementById(`todo-item-${id}`).remove();
  }
};

// 할 일 상태 토글
const completeToggle = (id) => {
  const todoIndex = todoList.findIndex((item) => item.date === id);

  if (todoIndex >= 0) {
    let todoItem = todoList[todoIndex];
    todoItem.completed = true;
    completedList.push(todoItem);
    todoList.splice(todoIndex, 1);
  } else {
    const completedIndex = completedList.findIndex((item) => item.date === id);
    let completedItem = completedList[completedIndex];
    completedItem.completed = false;
    todoList.push(completedItem);
    completedList.splice(completedIndex, 1);
  }

  localStorage.setItem("todoList", JSON.stringify(todoList));
  localStorage.setItem("completedList", JSON.stringify(completedList));
  renderToDoList();
};

// 할 일 DOM에 추가
const setTodoListItem = (item, parentElement) => {
  const { todo, date, completed } = item;

  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-list-item");
  todoItem.id = `todo-item-${date}`;

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  todoDiv.textContent = todo;

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.textContent = completed ? "취소" : "완료";
  completeBtn.addEventListener("click", () => completeToggle(date));

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "삭제";
  deleteBtn.addEventListener("click", () => deleteTodoListItem(date));

  if (completed) {
    todoDiv.style.textDecoration = "line-through";
    completeBtn.style.backgroundColor = "var(--bg)";
  } else {
    completeBtn.style.backgroundColor = "var(--dark-gray)";
  }

  todoItem.appendChild(todoDiv);
  todoItem.appendChild(completeBtn);
  todoItem.appendChild(deleteBtn);

  parentElement.appendChild(todoItem);
};

// 페이지 로드 시 저장된 할 일 목록을 렌더링
const renderToDoList = () => {
  const todoListElement = document.getElementById("todo-list");
  const completedListElement = document.getElementById("completed-list");

  todoListElement.innerHTML = "";
  completedListElement.innerHTML = "";

  todoList.forEach((item) => {
    setTodoListItem(item, todoListElement);
  });

  completedList.forEach((item) => {
    setTodoListItem(item, completedListElement);
  });
};

addBtn.addEventListener("click", addTodoListItem);

renderToDoList();
