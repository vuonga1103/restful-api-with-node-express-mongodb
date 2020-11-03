const express = require("express");

const router = express.Router();

// we don't need to specify /posts, because everytime we go to /posts this route will run
router.get("/", (req, res) => {
  res.send("We are on posts");
});

// we can accessed this via /posts/specific
router.get("/specific", (req, res) => {
  res.send("Specific post");
});

module.exports = router;
