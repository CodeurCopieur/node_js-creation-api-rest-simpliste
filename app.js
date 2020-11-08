const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send('Root Api')
})

app.get('/api/v1', (req, res) => {
  res.send('Api Version 1')
})

app.listen(8080, () => {
  console.log('Started on port 8080!');
})