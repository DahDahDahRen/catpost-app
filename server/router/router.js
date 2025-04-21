const express = require("express");
const {
  getPostsController,
  createPostController,
  deletePostController,
  updatePostController,
} = require("../controller/controller");
const validate = require("../utils/validate");
const multer = require("multer");
const router = express.Router();
const upload = multer();

router
  .get("/", getPostsController)
  .post("/", upload.none(), validate, createPostController);
router.delete("/:id", deletePostController).patch("/:id", updatePostController);

module.exports = router;
