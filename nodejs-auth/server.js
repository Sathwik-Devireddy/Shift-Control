const express = require("express");
require("dotenv").config();
const authRoutes = require("./routes/auth-routes.js");
const homeRoutes = require("./routes/home-routes.js");
const adminRoutes = require("./routes/admin-routes.js");
const connectTODB = require("./db/db.js");
const uploadImageROutes = require("./routes/imageRoutes.js");
const app = express();
const port = process.env.PORT || 4000;
//middleware
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/image", uploadImageROutes);

connectTODB();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
