const express = require('express');
const Parser = require('@postlight/parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/parser', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'Missing url parameter' });

  try {
    const result = await Parser.parse(url);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message || 'Parsing failed' });
  }
});

app.get('/', (req, res) => {
  res.send('🟢 Parser API is running!');
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});
