const mongoose = require("mongoose");
const bookschema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: [100, "max length cannot be 100 char"],
  },
  year: {
    type: Number,
    required: true,
    min: [1000, "year cannot be less than 1900"],
    max: [new Date().getFullYear(), "year cannot be greater than current year"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Book", bookschema);
