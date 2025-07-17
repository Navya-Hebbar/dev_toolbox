import React, { useState } from "react";

function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e) {
      setOutput("");
      setError("Invalid JSON: " + e.message);
    }
  };

  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output);
    }
  };

  return (
    <div>
      <h2>JSON Formatter</h2>
      <textarea
        rows={8}
        style={{ width: "100%", marginBottom: 8 }}
        placeholder="Paste raw JSON here..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div style={{ marginBottom: 8 }}>
        <button onClick={handleFormat}>Format</button>
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

export default JsonFormatter;