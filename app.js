// import express package (that was previously installed)
const express = require("express");

// execute express
const app = express();

// import mongoose
const mongoose = require("mongoose");

// import body-parser
const bodyParser = require("body-parser");

require("dotenv/config");

// create a middleware to ensure that when we hit any request, the body parser will run
app.use(bodyParser.json());

// import routes
const postsRoute = require("./routes/posts");

// create a middleware, specifying that whenever user goes to /posts, we should run postsRoute
app.use("/posts", postsRoute);

// ROUTES
// sending a response to a get request to root route
// first param is route
app.get("/", (req, res) => {
  res.send("We are on home");
});

// connect to DB
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database"));

// start listening to the server
app.listen(27017);

// to run this, use "npm start" will run "nodeman app.js"
