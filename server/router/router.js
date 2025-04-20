const express = require("express");
const {
  getPostsController,
  createPostController,
  deletePostController,
  updatePostController,
} = require("../controller/controller");
const router = express.Router();

router.get("/", getPostsController).post("/", createPostController);
router.delete("/:id", deletePostController).patch("/:id", updatePostController);

module.exports = router;
