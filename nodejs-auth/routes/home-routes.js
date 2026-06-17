const express = require("express");
const authMiddleware = require("../middleware/auth-middleware.js");
const route = express.Router();
route.get("/welcome", authMiddleware, (req, res) => {
  const { username, userId, role } = req.userInfo;
  res.json({
    message: "to Bonita...",
    user: {
      _id: userId,
      username,
      role,
    },
  });
});
module.exports = route;
