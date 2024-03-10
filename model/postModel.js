const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  phone: { type: String }, // Make phone field optional
  category: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Category" },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  photo: {
    data: Buffer,
    contentType: String
  },

}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
