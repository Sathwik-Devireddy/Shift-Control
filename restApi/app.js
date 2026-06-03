const express = require("express");
const app = express();
app.use(express.json());
let books = [
  { id: 1, name: "book1", author: "author1" },
  { id: 2, name: "book2", author: "author2" },
];
app.get("/", (req, res) => {
  res.send("tatakae");
});
app.get("/books", (req, res) => {
  res.json(books);
});
app.post("/add", (req, res) => {
  const newbooks = {
    id: books.length + 1,
    name: `book${books.length + 1}`,
    author: `author${books.length + 1}`,
  };
  books.push(newbooks);
  res.status(201).json({ data: newbooks, message: "book added successfully" });
});
app.get("/get/:id", (req, res) => {
  const jui = books.find((book) => book.id === parseInt(req.params.id));
  if (jui) {
    res.status(200).json(jui);
  } else {
    res.status(404).json({ message: "book not found" });
  }
});
port = 4000;
app.listen(port, () => {
  console.log("server running mate");
});
