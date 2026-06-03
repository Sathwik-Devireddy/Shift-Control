const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", "./views"); //set is used for setting the value of a variable in express
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/kungfu", (req, res) => {
  res.render("kungfu");
});
app.listen(3001, () => {
  console.log("server running roo");
});
