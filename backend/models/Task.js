// Import Mongoose to define the database schema
const mongoose = require("mongoose");

// Define the Task schema (structure of a task in the database)
const TaskSchema = new mongoose.Schema({
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

// Export the Task model to interact with MongoDB
module.exports = mongoose.model("Task", TaskSchema);
