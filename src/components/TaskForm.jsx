import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), title: taskTitle };
    addTask(newTask);
    setTaskTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter task title"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
