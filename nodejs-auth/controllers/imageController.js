const Image = require("../models/image.js");
const uploadToCloudinary = require("../helpers/cloudinaryHelper.js");
const fs = require("fs");
const uploadImageController = async (req, res) => {
  try {
    console.log("REQ.FILE =", req.file);
    console.log("REQ.PATH =", req.file?.path);
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
    const images = await Image.find({}).populate("uploadedBy");
    return res.status(200).json({
      success: true,
      message: "Images fetched successfully",
      images,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      error: "Failed to fetch images",
    });
  }
};
module.exports = { uploadImageController, fetchImagesController };
