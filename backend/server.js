// Load environment variables from .env file
require("dotenv").config();

// Import required dependencies
const express = require("express"); // Imports Express
const cors = require("cors"); // Imports CORS (Cross-Origin Resource Sharing) - Allows frontend & backend communication
const connectDB = require("./config/connectDB"); // Import the MongoDB connection function

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Enables JSON request body parsing
app.use(cors()); // Allows cross-origin requests

// Load all task-related routes
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

// Start the server on the defined PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
