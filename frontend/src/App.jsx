// Import necessary dependencies
import React, { useEffect, useState } from  "react";
import axios from  'axios';

// Define the API base URL ofr backend requests
const API_URL = "http://localhost:5000/api/tasks";

// Define the main App component
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

// Fetch tasks from the backend wheh nthe component mounts
useEffect(() => {
  axios.get(API_URL)
    .then(response => setTasks(response.data))
    .catch(error => console.error("Error fetching tasks:", error));
}, []);

// Function to handle adding a new task
const addTask = async () => {
  if (!newTask.trim()) return;
  try {
    const response = await axios.post(API_URL, { text: newTask });
    setTasks([...tasks, response.data]);
    setNewTask("");
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

// function to handle deleting a task
const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

// Renders in the browser
return (
  // Main container for the app, centered text with padding
  <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Task Manager</h1>

      {/* Input field and button for adding tasks */}
      <div>
          <input
              type="text"
              value={newTask} // Bind input value to state
              onChange={(e) => setNewTask(e.target.value)} // Update state on change
              placeholder="Enter a new task"
          />
          <button onClick={addTask}>Add Task</button>
      </div>

      {/* Display the list of tasks */}
      <ul>
          {tasks.length > 0 ? (
              // If there are tasks, display them in a list
              tasks.map((task) => (
                  <li key={task._id}>
                      {task.text} 
                      {/* Delete button for each task */}
                      <button onClick={() => deleteTask(task._id)}></button>
                  </li>
              ))
          ) : (
              // Display a message if there are no tasks
              <p>No tasks available.</p>
          )}
      </ul>
  </div>
);
};

// Export the App component for use in index.js
export default App;
