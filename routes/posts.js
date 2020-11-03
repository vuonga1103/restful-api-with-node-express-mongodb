const express = require("express");
const { restart } = require("nodemon");

const router = express.Router();

// importing the model that you want to post to
const Post = require("../models/Post");

// we don't need to specify /posts, because everytime we go to /posts this route will run
router.get("/", (req, res) => {
  res.send("We are on posts");
});

router.post("/", async (req, res) => {
  // creating new post with model Post
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    // saving to db
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
