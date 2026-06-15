const express = require("express");
require("dotenv").config();
const authRoutes = require("./routes/auth-routes.js");
const connectTODB = require("./db/db.js");
const app = express();
const port = process.env.PORT || 4000;
//middleware
app.use(express.json());
app.use("/api/auth", authRoutes);
connectTODB();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
