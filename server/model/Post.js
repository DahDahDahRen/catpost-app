const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "You need a title for this post!"],
    },
    body: {
      type: String,
      required: [true, "You need a body for this post!"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
