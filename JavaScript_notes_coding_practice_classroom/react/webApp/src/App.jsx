import Greeting from "./components/Greeting";
import { useState } from "react";

function App() {
  let [toDoList, setToDoList] = useState([]);
  let [newTask, setNewTask] = useState("");
  function addTask(task) {
    if (newTask !== "") {
      setToDoList([...toDoList, newTask]);
      // setNewTask = "";
      console.log("todosoe: ", ...toDoList);
    }
  }
  function removeTask(task) {
    setToDoList(toDoList.filter((item) => item !== task));
  }
  // console.log("toDoList", toDoList, "newTask", newTask)

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={addTask}>Add task</button>
      <ul>
        {toDoList.map((task, index) => (
          <li key={index}>
            {task}
            <span>
              <button
                onClick={() => {
                  removeTask(task);
                }}
              >
                Remove
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
