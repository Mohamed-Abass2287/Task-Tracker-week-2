import React from "react";

function TaskItem({ task, deleteTask }) {
  return (
    <li>
      <span>{task.title}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
