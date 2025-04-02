import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/api/auth/signup"; // Backend signup endpoint

const UserSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle signup submission
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, { name, email, password });
      navigate("/"); // Redirect to login after successful signup
    } catch (err) {
      setError("Signup failed. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Sign Up</h1>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Signup Form */}
      <form onSubmit={handleSignup} className="bg-white shadow-md rounded-lg p-6 w-80">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md mb-3"
          required
        />
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
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
          Sign Up
        </button>
      </form>

      {/* Login Link */}
      <p className="mt-4 text-gray-600">
        Already have an account? <a href="/" className="text-green-500">Login</a>
      </p>
    </div>
  );
};

export default UserSignup;
