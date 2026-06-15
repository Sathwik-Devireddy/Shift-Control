const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MONGODB");
  } catch (e) {
    console.error("CONNECTION FAILED TO DB");
    process.exit(1);
  }
};
module.exports = connectDB;
