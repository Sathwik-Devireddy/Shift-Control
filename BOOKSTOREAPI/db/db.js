const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://cosmicsaitama777_db_user:1jkXrxgykQcYKoZN@cluster0.tbchrjn.mongodb.net/",
    );
    console.log("Connected to database...|");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

module.exports = connectDB;
