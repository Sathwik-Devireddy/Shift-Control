const express = require("express");
const app = express();
const firstmiddleware = function (req, res, next) {
  console.log("first middleware");
  next();
};
app.use(firstmiddleware);
app.get("/", (req, res) => {
  res.send("hey waz up");
});

app.get("/kungfu", (req, res) => {
  res.send("kungfu page");
});

app.listen(3000, () => {
  console.log("server running roo");
});
