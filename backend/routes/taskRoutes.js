// Import dependencies and controller functions
const express = require("express");
const {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    deleteAllTasks
} = require ("../controllers/taskController");

// Initialize the router
const router = express.Router();

// Define API routes for task operations
router.get("/", getTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.delete("/", deleteAllTasks);

// Export the router to be used in server.js
module.exports = router;
