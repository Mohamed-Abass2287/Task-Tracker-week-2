import React, { useState } from "react";

import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';


function App() {
  const [tasks, setTasks] = useState([]);

// Add a new task/////////
  const addTask = (newTask) => setTasks([...tasks, newTask]);

  // Delete a task//////
  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  return (
    <div>
      <h1>Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      
    </div>
  );
}

export default App;

