// Import Mongoose to handle MongoDB connection
const mongoose = require("mongoose");

// Define an async function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1);
    }
};

// Export the connectDB function for use in server.js
module.exports = connectDB;
