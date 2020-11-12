const express = require('express');
const app = express();


//middlewares
app.use( (req, res, next) => {
  console.log('URL : ', req.url);
  next();
})

app.get('/api', (req, res) => {
  res.send('Root Api')
})

app.get('/api/v1', (req, res) => {
  res.send('Api Version 1')
})

app.get('/api/v1/books/:id', (req, res) => {
  res.send(req.params)
})

///api/v1/books/4

app.listen(8080, () => {
  console.log('Started on port 8080!');
})