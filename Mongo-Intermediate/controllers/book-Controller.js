const Author = require("../models/author");

const Book = require("../models/Pusthak");
const createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json({ success: true, data: author });
  } catch (E) {
    console.log(E);
    res.status(500).json({ error: "Failed to create author" });
  }
};

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ success: true, data: book });
  } catch (E) {
    console.log(E);
    res.status(500).json({ error: "Failed to create author" });
  }
};

const getBookWithAuthor = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("author");
    res.status(201).json({ success: true, data: book });
  } catch (E) {
    console.log(E);
    res.status(500).json({ error: "Failed to create author" });
  }
};

module.exports = { createAuthor, createBook, getBookWithAuthor };
