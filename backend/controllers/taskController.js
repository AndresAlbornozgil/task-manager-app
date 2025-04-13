const Task = require("../models/Task");

// GET all tasks for the authenticated user
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET a specific task (only if it belongs to the user)
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, userId: req.user.id });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE a new task
const createTask = async (req, res) => {
  try {
    const { text } = req.body;
    const newTask = new Task({
      text,
      userId: req.user.id // 👈 ATTACH USER
    });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE a task (only if it belongs to the user)
const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ message: "Task not found or unauthorized" });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a task (only if it belongs to the user)
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });
    if (!task) return res.status(404).json({ message: "Task not found or unauthorized" });
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE all tasks for the authenticated user
const deleteAllTasks = async (req, res) => {
  try {
    const result = await Task.deleteMany({ userId: req.user.id });
    res.json({ message: "All your tasks were deleted", deletedCount: result.deletedCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  deleteAllTasks
};
