import React, { useState } from "react";
import Lottie from "lottie-react";
import toolboxAnimation from "../lotties/toolbox.json";
import successAnimation from "../lotties/success.json";
import errorAnimation from "../lotties/error.json";
import 'bootstrap/dist/css/bootstrap.min.css';

function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 1500);
    } catch (e) {
      setOutput("");
      setError("Invalid JSON: " + e.message);
      setShowSuccess(false);
    }
  };

  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output);
    }
  };

  return (
    <div className="card shadow-lg p-4" style={{ maxWidth: 600, margin: "40px auto", background: "rgba(255,255,255,0.85)" }}>
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