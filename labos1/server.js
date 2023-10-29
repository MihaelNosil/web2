const express = require('express');
const { auth } = require('./auth0.js');
require('dotenv/config');
const path = require('path');
const app = express();
const port=3000;

app.use(express.static(path.join(__dirname, 'public')));
;

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});