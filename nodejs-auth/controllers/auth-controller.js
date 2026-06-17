const User = require("../models/UserDb.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register controller
const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const checkExistingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (checkExistingUser) {
      return res.status(400).json({
        success: false,
        error: "Username or email already exists ,change billa",
      });
    }
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //creating new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role: role || "User",
    });
    if (newUser) {
      res.status(201).json({
        success: true,
        message: "user registered successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to register user" });
  }
};
//login controller
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }
    //bearer token generation
    const accesstoken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      },
    );
    res.status(200).json({ success: true, accesstoken });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to login user" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
