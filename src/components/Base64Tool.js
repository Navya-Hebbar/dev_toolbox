import React, { useState } from "react";

function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleEncode = () => {
    try {
      setOutput(btoa(input));
      setError("");
    } catch (e) {
      setOutput("");
      setError("Encoding error: " + e.message);
    }
  };

  const handleDecode = () => {
    try {
      setOutput(atob(input));
      setError("");
    } catch (e) {
      setOutput("");
      setError("Decoding error: " + e.message);
    }
  };

  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output);
    }
  };

  return (
    <div>
      <h2>Base64 Encoder/Decoder</h2>
      <textarea
        rows={6}
        style={{ width: "100%", marginBottom: 8 }}
        placeholder="Enter text or Base64 here..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div style={{ marginBottom: 8 }}>
        <button onClick={handleEncode}>Encode</button>
        <button onClick={handleDecode} style={{ marginLeft: 8 }}>Decode</button>
      </div>
      {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
      {output && (
        <div>
          <pre style={{ background: "#f4f4f4", padding: 12, borderRadius: 6 }}>{output}</pre>
          <button onClick={handleCopy}>Copy to Clipboard</button>
        </div>
      )}
    </div>
  );
}

export default Base64Tool;
