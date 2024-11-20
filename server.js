const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const replica = process.env.APP_NAME

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  console.log(`Request served by ${replica}`);
});

app.listen(port, () => console.log(`${replica} running on port ${port}`));