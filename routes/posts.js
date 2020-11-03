const express = require("express");

const router = express.Router();

// importing the model that you want to post to
const Post = require("../models/Post");

// we don't need to specify /posts, because everytime we go to /posts this route will run
router.get("/", (req, res) => {
  res.send("We are on posts");
});

router.post("/", (req, res) => {
  // need to get info from req.body
  // need a package to convert req.body to json for us
  console.log(req.body);
});

module.exports = router;
