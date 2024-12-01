const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
/* New : event propogation */

// taskInput.addEventListener("focus", () => {
//     taskInput.style.border = "2px solid red"
// })

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value;
  // console.log(taskText);

  if (taskText.trim() && taskText != "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    li.style.color = "blue";

    li.addEventListener("click", () => {
      li.style.textDecoration = "line-through";
      li.style.color = "green";
      li.classList.add("completed");
    });

    const btn = document.createElement("button");
    btn.innerText = "Delete Task";

    btn.addEventListener("click", (event) => {
      event.stopPropagation(); // event propogation
      if (li.classList.contains("completed")) {
        li.remove(); // removed from DOM tree;
      } else alert("First complete the task to Delete it ");
    });

    li.appendChild(btn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
});

// Event propogation;
