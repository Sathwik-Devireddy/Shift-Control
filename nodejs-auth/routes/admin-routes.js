const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");
const router = express.Router();
const isAdminUser = require("../middleware/admin-middleware");
router.get("/welcome", authMiddleware, isAdminUser, (req, res) => {
  res.json({
    message: "pablo esco barrio",
  });
});
module.exports = router;
