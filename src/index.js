document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("new-task-description");
  const task = input.value;

  const li = document.createElement("li");
  li.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", () => li.remove());

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = ""; // clear input after adding
});

});
