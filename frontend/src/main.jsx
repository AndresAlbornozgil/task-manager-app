// Import necessary dependencies
import React from "react";
import ReactDom from "react-dom/client";
import App from "./App"
import "./index.css";

// Render the App inside the root element in index.html
ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
