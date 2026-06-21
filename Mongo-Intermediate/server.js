const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes.js");
const bookRoutes = require("./routes/book-routes.js");
app.use(express.json());
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MONGODB");
  } catch (e) {
    console.error("CONNECTION FAILED TO DB");
    process.exit(1);
  }
};
connectDB();
app.use("/products", productRoutes);
app.use("/reference", bookRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
