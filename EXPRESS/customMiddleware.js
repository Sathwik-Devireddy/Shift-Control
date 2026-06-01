const express = require("express");
const app = express();
const timestamp = (req, res, next) => {
  const times = new Date().toLocaleTimeString();
  console.log(`${times} from ${req.method} on ${req.url}`);
  next();
};
app.use(timestamp);

app.get("/", (req, res) => {
  res.send("hey waz uppp");
});

app.get("/kungfu", (req, res) => {
  res.send("kungfu page");
});

app.listen(3000, () => {
  console.log("server running roo");
});
