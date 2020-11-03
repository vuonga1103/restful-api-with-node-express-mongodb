const express = require("express");

const router = express.Router();

// importing the model that you want to post to
const Post = require("../models/Post");

// GET BACK ALL THE POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMITS A POST
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

// SPECIFIC POST
router.get("/:postId", async (req, res) => {
  try {
    // can access postId via req.params.postId
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE POST
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
