const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

// GET all tasks
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        if (tasks.length === 0) {
            return res.json({ message: "No tasks found. Start by adding a new task!" });
        }
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET a task by ID
router.get("/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST (create a new task)
router.post("/", async (req, res) => {
    try {
        const { text } = req.body;
        const newTask = new Task({ text });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// PUT (update a task)
router.put("/:id", async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE a task
router.delete("/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json({ message: "Task deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE all tasks
router.delete("/", async (req, res) => {
    try {
        const result = await Task.deleteMany({});
        res.json({ message: "All tasks deleted succesfully", deletedCount: result.deletedCount });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
