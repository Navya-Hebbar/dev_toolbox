import React, { useState } from "react";
import JsonFormatter from "./components/JsonFormatter";
import Base64Tool from "./components/Base64Tool";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("json");

  return (
    <div className="app-container">
      <h1>Dev Toolbox</h1>
      <div className="tabs">
        <button
          className={activeTab === "json" ? "active" : ""}
          onClick={() => setActiveTab("json")}
        >
          JSON Formatter
        </button>
        <button
          className={activeTab === "base64" ? "active" : ""}
          onClick={() => setActiveTab("base64")}
        >
          Base64 Encoder/Decoder
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "json" ? <JsonFormatter /> : <Base64Tool />}
      </div>
    </div>
  );
}

export default App;
