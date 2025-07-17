import React, { useState } from "react";
import JsonFormatter from "./components/JsonFormatter";
import Base64Tool from "./components/Base64Tool";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("json");

  // Glassmorphic background style
  const glassBg = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,
    background: "linear-gradient(135deg, rgba(173,216,230,0.5) 0%, rgba(255,182,193,0.5) 100%)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)"
  };

  return (
    <>
      <div style={glassBg}></div>
      <div className="container py-5">
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
    </>
  );
}

export default App;
