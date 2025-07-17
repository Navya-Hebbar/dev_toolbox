import React, { useState } from "react";
import Lottie from "lottie-react";
import welcomeAnimation from "../lotties/Welcome.json";
import successAnimation from "../lotties/success.json";
import errorAnimation from "../lotties/error.json";

function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

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
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  // Glassmorphic style for the whole book
  const bookStyle = {
    maxWidth: 900,
    margin: "40px auto",
    background: "rgba(255,255,255,0.25)",
    borderRadius: "1.5rem",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
    border: "1px solid rgba(255,255,255,0.3)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    padding: "0",
    overflow: "hidden"
  };

  return (
    <div className="card shadow-lg" style={bookStyle}>
      <div className="row g-0">
        {/* Left: Animations and effects */}
        <div className="col-md-5 d-flex flex-column align-items-center justify-content-center bg-light" style={{ minHeight: 500, position: "relative" }}>
          <Lottie animationData={welcomeAnimation} style={{ width: 300, height: 300 }} loop={true} />
          {/* Add more Lottie or effects here */}
          <div style={{
            position: "absolute",
            bottom: 30,
            left: 0,
            width: "100%",
            textAlign: "center",
            fontWeight: "bold",
            color: "#1976d2",
            fontSize: "1.2rem",
            opacity: 0.7
          }}>
            {/* Fun message or effect */}
            <span>Welcome to your Dev Toolbox!</span>
          </div>
        </div>
        {/* Right: Existing UI */}
        <div className="col-md-7 p-4">
          <h2 className="card-title text-primary text-center mb-3">JSON Formatter</h2>
          <textarea
            className="form-control mb-3"
            rows={8}
            placeholder="Paste raw JSON here..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <div className="mb-3 text-center">
            <button className="btn btn-primary px-4 me-2" onClick={handleFormat}>Format</button>
            <button className="btn btn-secondary px-4" onClick={() => {
              setInput("");
              setOutput("");
              setError("");
              setShowSuccess(false);
              setCopied(false);
            }}>Reset</button>
          </div>
          {error && (
            <div className="alert alert-danger d-flex align-items-center justify-content-center flex-column" role="alert">
              <Lottie
                animationData={errorAnimation}
                style={{ width: 100, height: 100, marginBottom: 8, animation: 'bounce 1s' }}
                loop={false}
              />
              <span className="fw-bold fs-5 text-danger">{error}</span>
            </div>
          )}
          {showSuccess && (
            <div className="alert alert-success text-center d-flex flex-column align-items-center" role="alert">
              <Lottie
                animationData={successAnimation}
                style={{ width: 100, height: 100, marginBottom: 8 }}
                loop={false}
              />
              <span className="fw-bold fs-5 text-success">Format successful!</span>
            </div>
          )}
          {output && (
            <div>
              <pre className="bg-light p-3 rounded">{output}</pre>
              <button className="btn btn-success mt-2" onClick={handleCopy}>Copy to Clipboard</button>
              {copied && (
                <div className="alert alert-info mt-2 py-1 px-2 text-center" role="alert" style={{ fontSize: '0.95rem' }}>Copied to clipboard!</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default JsonFormatter;