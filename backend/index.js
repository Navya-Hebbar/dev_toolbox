const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// JSON Formatter
app.post('/format-json', (req, res) => {
  try {
    const { json } = req.body;
    const parsed = JSON.parse(json);
    const pretty = JSON.stringify(parsed, null, 2);
    res.json({ success: true, pretty });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Invalid JSON: ' + err.message });
  }
});

// Base64 Encode
app.post('/encode', (req, res) => {
  const { text } = req.body;
  try {
    const encoded = Buffer.from(text, 'utf-8').toString('base64');
    res.json({ success: true, encoded });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Encoding error: ' + err.message });
  }
});

// Base64 Decode
app.post('/decode', (req, res) => {
  const { base64 } = req.body;
  try {
    const decoded = Buffer.from(base64, 'base64').toString('utf-8');
    res.json({ success: true, decoded });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Decoding error: ' + err.message });
  }
});

app.get('/', (req, res) => {
  res.send('Dev Toolbox API is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));