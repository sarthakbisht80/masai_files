const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompleted");

// Add Task
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Create list item
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const btnGroup = document.createElement("div");
  btnGroup.className = "task-buttons";

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.className = "completeBtn";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
    toggleClearButton();
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.className = "deleteBtn";
  deleteBtn.onclick = () => {
    li.remove();
    toggleClearButton();
  };

  btnGroup.appendChild(completeBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);

  taskList.appendChild(li);

  taskInput.value = "";
  toggleClearButton();
}

// Clear completed tasks
clearCompletedBtn.addEventListener("click", () => {
  const completedTasks = document.querySelectorAll("li.completed");
  completedTasks.forEach(task => task.remove());
  toggleClearButton();
});

// Toggle clear button visibility
function toggleClearButton() {
  const anyCompleted = document.querySelector("li.completed");
  clearCompletedBtn.classList.toggle("hidden", !anyCompleted);
}
