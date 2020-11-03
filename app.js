// import express package (that was previously installed)
const express = require('express');

// execute express
const app = express();

// MIDDLEWARES- aka fns that execute when a specific route is being hit
app.use('/posts', () => {
  console.log('This is a middleware running')
})

// ROUTES
  // sending a response to a get request to root route
  // first param is route
app.get("/", (req, res) => {
  res.send('We are on home');
})

app.get("/posts", (req, res) => {
  res.send('We are on posts');
})

// start listening to the server
app.listen(3000);

// to run this, use "npm start" will run "nodeman app.js"