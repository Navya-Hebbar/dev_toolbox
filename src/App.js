import React, { useState, useEffect } from "react";
import JsonFormatter from "./components/JsonFormatter";
import Base64Tool from "./components/Base64Tool";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("json");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Glassmorphic background style
  const glassBg = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,
    background: darkMode
      ? "linear-gradient(135deg, rgba(30,30,40,0.85) 0%, rgba(60,60,80,0.85) 100%)"
      : "linear-gradient(135deg, rgba(173,216,230,0.5) 0%, rgba(255,182,193,0.5) 100%)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)"
  };

  return (
    <>
      <div style={glassBg}></div>
      <div className="container py-5 position-relative">
        <button
          className={`btn btn-${darkMode ? "light" : "dark"} position-absolute top-0 end-0 m-3`}
          onClick={() => setDarkMode((prev) => !prev)}
          style={{ zIndex: 10 }}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        <div className="d-flex justify-content-center mb-4">
          <button
            className={`btn btn-outline-primary me-2 ${activeTab === "json" ? "active" : ""}`}
            onClick={() => setActiveTab("json")}
            style={{ fontWeight: activeTab === "json" ? "bold" : "normal", boxShadow: activeTab === "json" ? "0 2px 8px rgba(0,0,0,0.12)" : "none" }}
          >
            JSON Formatter
          </button>
          <button
            className={`btn btn-outline-danger ${activeTab === "base64" ? "active" : ""}`}
            onClick={() => setActiveTab("base64")}
            style={{ fontWeight: activeTab === "base64" ? "bold" : "normal", boxShadow: activeTab === "base64" ? "0 2px 8px rgba(0,0,0,0.12)" : "none" }}
          >
            Base64 Encoder/Decoder
          </button>
        </div>
        {activeTab === "json" ? <JsonFormatter /> : <Base64Tool />}
      </div>
      <style>{`
        .dark-mode {
          background: #181824 !important;
          color: #f1f1f1 !important;
        }
        .dark-mode .card {
          background: rgba(30,30,40,0.85) !important;
          color: #f1f1f1 !important;
          box-shadow: 0 0 6px 1px #00ffe744;
        }
        .dark-mode .bg-light {
          background: #232336 !important;
          box-shadow: 0 0 6px 1px #00ffe744;
        }
        .dark-mode textarea, .dark-mode .form-control {
          background: #232336 !important;
          color: #f1f1f1 !important;
          border-color: #00ffe7 !important;
          box-shadow: 0 0 2px 0.5px #00ffe744;
        }
        .dark-mode .alert-success {
          background: #1e2e1e !important;
          color: #b6fcb6 !important;
        }
        .dark-mode .alert-danger {
          background: #2e1e1e !important;
          color: #fcb6b6 !important;
        }
        .dark-mode .alert-info {
          background: #1e2e2e !important;
          color: #b6eafc !important;
        }
        .dark-mode .btn-dark {
          background: #f1f1f1 !important;
          color: #232336 !important;
        }
        .dark-mode .btn-light {
          background: #232336 !important;
          color: #f1f1f1 !important;
        }
      `}</style>
    </>
  );
}

export default App;
