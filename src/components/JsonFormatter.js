import React, { useState } from "react";
import Lottie from "lottie-react";
import toolboxAnimation from "../lotties/toolbox.json";
import successAnimation from "../lotties/success.json";
import errorAnimation from "../lotties/error.json";

function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormat = async () => {
    setError("");
    setShowSuccess(false);
    setOutput("");
    try {
      const response = await fetch("http://localhost:5000/format-json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ json: input }),
      });
      const data = await response.json();
      if (data.success) {
        setOutput(data.pretty);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 1500);
      } else {
        setError(data.error || "Unknown error");
      }
    } catch (err) {
      setError("Server error: " + err.message);
    }
  };

  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output);
    }
  };

  // Glassmorphic style
  const glassStyle = {
    maxWidth: 600,
    margin: "40px auto",
    background: "rgba(255,255,255,0.25)",
    borderRadius: "1.5rem",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
    border: "1px solid rgba(255,255,255,0.3)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    padding: "2rem"
  };

  return (
    <div className="card shadow-lg" style={glassStyle}>
      <div className="text-center mb-3">
        <Lottie animationData={toolboxAnimation} style={{ width: 80, height: 80 }} loop={true} />
      </div>
      <h2 className="card-title text-primary text-center mb-3">JSON Formatter</h2>
      <textarea
        className="form-control mb-3"
        rows={8}
        placeholder="Paste raw JSON here..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div className="mb-3 text-center">
        <button className="btn btn-primary px-4" onClick={handleFormat}>Format</button>
      </div>
      {error && (
        <div className="alert alert-danger d-flex align-items-center" role="alert">
          <Lottie animationData={errorAnimation} style={{ width: 40, height: 40 }} loop={false} />
          <span className="ms-2">{error}</span>
        </div>
      )}
      {showSuccess && (
        <div className="alert alert-success text-center" role="alert">
          <Lottie animationData={successAnimation} style={{ width: 40, height: 40 }} loop={false} />
        </div>
      )}
      {output && (
        <div>
          <pre className="bg-light p-3 rounded">{output}</pre>
          <button className="btn btn-success mt-2" onClick={handleCopy}>Copy to Clipboard</button>
        </div>
      )}
    </div>
  );
}

export default JsonFormatter;