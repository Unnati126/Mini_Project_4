import React from "react";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="list-group">
      {tasks.map(task => (
        <li
          key={task.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? "list-group-item-success" : ""}`}
        >
          <span onClick={() => toggleTask(task.id)} style={{ cursor: "pointer" }}>
            {task.completed ? <s>{task.text}</s> : task.text}
          </span>
          <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;