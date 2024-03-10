const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    answer: { type: String, required: true },
    role: {
      type: Number,
      default: 0,
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] 
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
