// Import necessary dependencies for routing and pages
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";

// Define the main application component with routing
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserLogin />} /> {/* Default page */}
                <Route path="signup" element={<UserSignup />} />
                <Route path="dashboard" element={<UserDashboard />} />
            </Routes>
        </Router>
    );
};

// Export the App component to be used in main.jsx
export default App;
