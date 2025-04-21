const express = require("express");
const {
  getPostsController,
  createPostController,
  deletePostController,
  updatePostController,
} = require("../controller/controller");
const validate = require("../utils/validate");
const router = express.Router();

router.get("/", getPostsController).post("/", validate, createPostController);
router.delete("/:id", deletePostController).patch("/:id", updatePostController);

module.exports = router;
