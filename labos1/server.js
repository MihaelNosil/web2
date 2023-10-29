const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://user:gim2UhC1sySSk97Lc99djDNyZIEyNCBk@dpg-ckv3i9mb0mos73edt1bg-a.oregon-postgres.render.com/roundrobinturnir', // Use the environment variable
});

// Example query
pool.query('SELECT * FROM your_table', (err, result) => {
  if (err) {
    console.error('Error executing query', err);
    return;
  }
  console.log('Query result:', result.rows);
});