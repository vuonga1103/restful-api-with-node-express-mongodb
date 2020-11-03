const express = require("express");

const router = express.Router();

// importing the model that you want to post to
const Post = require("../models/Post");

// we don't need to specify /posts, because everytime we go to /posts this route will run
router.get("/", (req, res) => {
  res.send("We are on posts");
});

router.post("/", (req, res) => {
  // creating new post with model Post
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  // saving to db
  post
    .save()
    .then((data) => {
      res.status(200).json(data); //this puts the data on the screen after we post
    })
    .catch((err) => {
      // creating an error message
      res.json({ message: err });
    });
});

module.exports = router;
