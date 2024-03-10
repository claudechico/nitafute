const User = require("../model/userModel");
const JWT = require("jsonwebtoken");

// protected route
exports.requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(403).send({
        success: false,
        message: "You are not authorized to access this resource",
      });
    }
    next();
  } catch (error) {
    res.status(401).send({
      success: false,
      message: "Invalid admin middleware",
    });
  }
};
