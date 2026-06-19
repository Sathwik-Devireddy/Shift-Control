const Image = require("../models/image.js");
const uploadToCloudinary = require("../helpers/cloudinaryHelper.js");
const fs = require("fs");
const cloudinary = require("../config/cloudinary");
const uploadImageController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: "No image uploaded",
      });
    }

    const { url, publicId } = await uploadToCloudinary(req.file.path);

    const newImage = await Image.create({
      url,
      publicID: publicId,
      uploadedBy: req.userInfo.userId,
    });
    //delete from local file
    fs.unlinkSync(req.file.path);
    return res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      image: newImage,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      error: "Failed to upload image",
    });
  }
};
const fetchImagesController = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;
    const sortBy = req.query.sortBy || "createdAt";
    const sortOrder = req.query.sortOrder === "asc" ? 1 : -1;
    const totalImages = await Image.countDocuments({});
    const totalPages = Math.ceil(totalImages / limit);
    const sortObj = {};
    sortObj[sortBy] = sortOrder;

    const images = await Image.find({}).sort(sortObj).skip(skip).limit(limit);
    return res.status(200).json({
      success: true,
      currentPage: page,
      totalPages: totalPages,
      totalImages: totalImages,
      message: "Images fetched successfully",
      data: images,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      error: "Failed to fetch images",
    });
  }
};

const deleteImageController = async (req, res) => {
  try {
    const getCurrentImageId = req.params.id;
    const userId = req.userInfo.userId;
    const image = await Image.findById(getCurrentImageId);
    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }
    //check image is uploaded by the current user
    if (image.uploadedBy.toString() !== userId) {
      return res.status(403).json({ error: "Unauthorized" });
    }
    //delete image
    await cloudinary.uploader.destroy(image.publicID);
    await Image.findByIdAndDelete(getCurrentImageId);
    return res.status(200).json({ success: true, message: "Image deleted" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Failed to delete image" });
  }
};

module.exports = {
  uploadImageController,
  fetchImagesController,
  deleteImageController,
};
