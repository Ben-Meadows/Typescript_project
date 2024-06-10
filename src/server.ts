// src/server.ts

// src/server.ts
import express from 'express';
import { add } from './index.js';
import { greet } from './helper.js';
import fs from 'fs';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('GET /'); // Logs to the terminal
  res.send(greet('World')); // Sends response to the browser
});

app.get('/add', (req, res) => {
  const sum = add(2, 3);
  console.log(`Sum is: ${sum}`); // Logs to the terminal
  res.send(`Sum is: ${sum}`); // Sends response to the browser
});

app.get('/readfile', (req, res) => {
  fs.readFile('./src/sample.txt', 'utf8', (err, data) => {
      if (err) {
          console.error(err); // Logs error to the terminal
          res.status(500).send('Error reading file'); // Sends error response to the browser
      } else {
          console.log(data); // Logs file content to the terminal
          res.send(data); // Sends file content to the browser
      }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
