const fs = require("fs");
const path = require("path");
const datafolder = path.join(__dirname, "data");
// Create a new file
if (!fs.existsSync(datafolder)) {
  fs.mkdirSync(datafolder);
  console.log("Data folder created");
}
const filepath = path.join(datafolder, "example.txt");
fs.writeFileSync(filepath, "Hello, this is an example file.");
console.log("File created at", filepath);
// Read the file
const readData = fs.readFileSync(filepath, "utf-8");
console.log("File content:", readData);

const asyncFilePath = path.join(datafolder, "asyncExample.txt");
fs.writeFile(asyncFilePath, "This is an async example file.", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File created at", asyncFilePath);
  }
});

fs.readFile(asyncFilePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", data);
  }
});
