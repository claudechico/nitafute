const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug:{
        type: String,
        lowercase: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", userSchema);
