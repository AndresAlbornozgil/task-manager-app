// Import necessary libraries and hooks
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// API endpoint for tasks
const API_URL = "http://localhost:5000/api/tasks";

const UserDashboard = () => {
  // 🧱 State management for tasks and input
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const navigate = useNavigate();

  // Check for token and fetch tasks when component loads
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // Redirect to login if not authenticated
    } else {
      fetchTasks(token);
    }
  }, []);

  // Fetch all tasks from the backend
  const fetchTasks = async (token) => {
    try {
      const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Add a new task
  const handleAddTask = async () => {
    if (!newTask.trim()) return;
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        API_URL,
        { text: newTask },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTasks([...tasks, response.data]);
      setNewTask("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Delete a task by ID
  const handleDeleteTask = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Log out and clear token
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // Render UI
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-xl bg-white p-6 rounded shadow">
        {/* Header section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600">Your Tasks</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Input field for adding new tasks */}
        <div className="flex mb-4 gap-2">
          <input
            type="text"
            placeholder="New task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow px-4 py-2 border rounded"
          />
          <button
            onClick={handleAddTask}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add
          </button>
        </div>

        {/* Task list section */}
        <ul>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <li
                key={task._id}
                className="flex justify-between items-center mb-2 p-3 bg-gray-50 rounded shadow-sm"
              >
                <span>{task.text}</span>
                <button
                  onClick={() => handleDeleteTask(task._id)}
                  className="text-red-500 hover:text-red-700"
                >
                </button>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No tasks available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
