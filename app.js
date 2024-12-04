const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the High Availability Node.js Application!');
});

app.get('/health', (req, res) => {
  res.send({ status: 'UP' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
