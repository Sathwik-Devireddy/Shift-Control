const express = require("express");
const app = express();
const timestamp = (req, res, next) => {
  const times = new Date().toLocaleTimeString();
  console.log(`${times} from ${req.method} on ${req.url}`);
  next();
};
app.use(timestamp); //use is used when we want to use a middleware in our application.
// It takes the function name as an argument and executes it for every incoming request to the server.
app.get("/", (req, res) => {
  res.send("hey waz uppp");
});

app.get("/kungfu", (req, res) => {
  res.send("kungfu page");
});

app.listen(3000, () => {
  console.log("server running roo");
});
