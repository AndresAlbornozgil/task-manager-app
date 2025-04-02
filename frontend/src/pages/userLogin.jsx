import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/api/auth/login"; // Backend login endpoint

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, { email, password });
      localStorage.setItem("token", response.data.token); // Store JWT token
      navigate("/dashboard"); // Redirect to dashboard
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Login</h1>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Login Form */}
      <form onSubmit={handleLogin} className="bg-white shadow-md rounded-lg p-6 w-80">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-md mb-3"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-md mb-3"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Login
        </button>
      </form>

      {/* Signup Link */}
      <p className="mt-4 text-gray-600">
        Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
      </p>
    </div>
  );
};

export default UserLogin;
