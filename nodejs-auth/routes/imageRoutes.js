const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");
const router = express.Router();
const isAdminUser = require("../middleware/admin-middleware");
const uploadMiddleware = require("../middleware/upload-middleware");
const {
  uploadImageController,
  fetchImagesController,
} = require("../controllers/imageController");
//upload image
router.post(
  "/upload",
  authMiddleware,
  isAdminUser,
  uploadMiddleware.single("image"),
  uploadImageController,
);
//grt all image
router.get("/get", authMiddleware, isAdminUser, fetchImagesController);
module.exports = router;
