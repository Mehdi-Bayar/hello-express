import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

// Constants
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
