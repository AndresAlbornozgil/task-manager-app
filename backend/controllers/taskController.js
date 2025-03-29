// Import the Task model to interact with the database
const Task = require("../models/Task");

// GET all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        if (tasks.length === 0) {
            return res.json({ message: "No tasks found. Start by adding a new task!" });
        }
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET a task by ID
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// POST (create)
const createTask = async (req, res) => {
    try {
        const { text } = req.body;
        const newTask = new Task({ text });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// PUT (update)
const updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE (single)
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json({ message: "Task deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE (all)
const deleteAllTasks = async (req, res) => {
    try {
        const result = await Task.deleteMany({});
        res.json({ message: "All tasks deleted succesfully", deletedCount: result.deletedCount });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Export controller functions to be used in routes
module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    deleteAllTasks
};
