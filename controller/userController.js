const { hashPassword, comparePassword } = require("../helper/authHelper");
const User = require("../model/userModel");
const JWT = require("jsonwebtoken");
const { use } = require("../routes/authRoutes");
const Post = require("../model/postModel");
exports.registerController = async (req, res) => {
  const { name, email, password, mobile, answer } = req.body;
  try {
    if (!name || !email || !password || !mobile || !answer) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }
    // existing user
    const userExisting = await User.findOne({ email });
    if (userExisting) {
      return res.status(409).send({
        success: false,
        message: "User already exists",
      });
    }
    const hashedPassword = await hashPassword(password);

    // Create a new user
    const user = new User({
      name,
      email,
      mobile,
      password: hashedPassword,
      answer,
    });

    // Save the user
    await user.save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(505).send({ message: "OOOPs something went Wrong" });
  }
};
// login user
exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Email and Password are required",
      });
    }
    // Find user by email
    const user = await User.findOne({ email });
    // If user not found
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User does not exist",
      });
    }
    // Compare passwords
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).send({
        success: false,
        message: "Incorrect password",
      });
    }
    // Generate JWT token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).send({
      success: true,
      message: "Logged in successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        phone: user.phone,
        role: user.role,
        token:user.token
      },
      token: token,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
//  test
exports.testController = (req, res) => {
  res.send("protected route matemu");
};
// forgot password
exports.forgotPassword = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email || !answer || !newPassword) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }
    // Find user by email and answer
    const user = await User.findOne({ email, answer });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found or wrong answer" });
    }
    // Hash new password
    const hash = await hashPassword(newPassword);
    // Update password
    await User.findByIdAndUpdate(user.id, { password: hash });
    res
      .status(200)
      .json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}; //  getall user
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res
      .status(200)
      .send({ success: true, message: "Users successfully", users });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "oop something went wrong" });
  }
};
// delete user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.status(200).send({ success: true, message: "user delete successfull" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "oop something went wrong" });
  }
};
// get data belongs to user

exports.getDatabeleongsToUser = async (req, res) => {
  try {
    const post = await Post.find({ author: req.user._id });
    res.json(post);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "oooop something went wrong" });
  }
};
