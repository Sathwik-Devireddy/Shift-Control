const express = require("express");
require("dotenv").config();
const connectDB = require("./db/db.js");
const app = express();
const bookRoutes = require("./routes/book-routes.js");

const port = process.env.PORT || 4000;
connectDB();
app.use(express.json());
app.use("/api/books", bookRoutes); //this is the route for the book routes. It is used to access the book routes from the server.js file. The first parameter is the route and the second parameter is the router. The router is used to access the routes from the book-routes.js file.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
