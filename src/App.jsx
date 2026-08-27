import { useState } from 'react'
import './App.css'

const SAMPLE_TASKS = ["Buy milk", "Call the landlord", "Book the dentist",
                      "Water the plants", "Reply to Mette"];
let REMAINING_TASKS = SAMPLE_TASKS;

function randomTask() {
  let i = Math.floor(Math.random() * REMAINING_TASKS.length);
  let chosenTask = REMAINING_TASKS[i];

  REMAINING_TASKS.splice(i, 1); // Remove task from pool

  return chosenTask;
}

function TodoItem({ text }) {
  return <li className="todo-item">{text}</li>;
}

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleAdd() {
    if (REMAINING_TASKS.length == 0) { alert("No More Tasks"); return;} // Prevents repeat tasks
    setTodos([...todos, randomTask()]);
  }

  return (
    <>
      <h1>My To-Do ({todos.length})</h1>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((text, index) => (
          <TodoItem key={index} text={text} />
        ))}
      </ul>
    </>
  );
}