const Post = require("../model/Post");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

//! Get all posts
const getPostsController = catchAsync(async (req, res, next) => {
  const catPosts = await Post.find({});

  if (!catPosts) {
    return next(new AppError("Failed to fetch all cat posts", 404));
  }

  res.status(200).json({
    result: catPosts,
    statusCode: 200,
    isConnected: true,
  });
});

//! Create post
const createPostController = catchAsync(async (req, res, next) => {
  const post = await Post.create(req.body);

  if (!post) {
    return next(new AppError("Failed to create the post.", 404));
  }

  res.status(200).json({
    msg: "Creating a post",
    statusCode: 200,
    isConnected: true,
    post,
  });
});

//! Delete post
const deletePostController = catchAsync(async (req, res, next) => {
  const post = await Post.findByIdAndDelete(req.params.id);

  if (!post) {
    return next(new AppError("Cat id does not exist", 404));
  }

  res.status(200).json({
    msg: "Successfully deleted a post",
    statusCode: 200,
    isConnected: true,
    id: post._id,
  });
});

//! Update post
const updatePostController = catchAsync(async (req, res, next) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!post) {
    return next(new AppError("Cat post does not exist", 404));
  }

  res.status(200).json({
    msg: "Updated successfully the document",
    statusCode: 200,
    isConnected: true,
    updated: post,
  });
});

module.exports = {
  getPostsController,
  createPostController,
  deletePostController,
  updatePostController,
};
