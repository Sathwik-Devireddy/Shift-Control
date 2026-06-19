const multer = require("multer");
const path = require("path");

//set our multer storage

const storage = multer.diskStorage({
  //below function is for saving the file to the destination on the server
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },

  //below code is for renaming the file so that the file name is unique
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname),
    );
  },
});

//file filter function

const checkFileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("not an image "));
  }
};
//upload middleware
const upload = multer({
  storage: storage,
  fileFilter: checkFileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = upload;
