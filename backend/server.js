// Load environment variables from .env file
require("dotenv").config();

// Import required dependencies
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");

// Import routes and middleware
const userRoutes = require("./routes/userRoutes"); // <-- your auth routes
const taskRoutes = require("./routes/taskRoutes");
const authMiddleware = require("./middleware/authMiddleware");

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", userRoutes); // <-- use this for login/register
app.use("/api/tasks", authMiddleware, taskRoutes); // Protect task routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
