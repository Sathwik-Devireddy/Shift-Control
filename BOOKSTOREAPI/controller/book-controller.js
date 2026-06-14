const Book = require("../models/book.js");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    res.status(200).json({
      success: true,
      message: "all books retrieved successfully",
      data: allBooks,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve books" });
  }
};
const getSingleBook = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const bookDetailsById = await Book.findById(getCurrentBookId);
    if (!bookDetailsById) {
      res.status(404).json({ error: "Book not found" });
    } else {
      res.status(200).json({
        success: true,
        message: "book details retrieved successfully",
        data: bookDetailsById,
      });
    }
  } catch (e) {
    res.status(500).json({ error: "Failed to retrieve book details" });
  }
};
const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyAddedBook = await Book.create(newBookFormData);
    if (newlyAddedBook) {
      res.status(201).json({
        success: true,
        message: "book added successfully",
        data: newlyAddedBook,
      });
    } else {
      res.status(400).json({ error: "Failed to add book" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to add book" });
  }
};
const updateBook = async (req, res) => {
  try {
    const bookIdToUpdate = req.params.id;
    const updatedBookData = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      bookIdToUpdate,
      updatedBookData,
      { new: true },
    );
    if (updatedBook) {
      res.status(200).json({
        success: true,
        message: "book updated successfully",
        data: updatedBook,
      });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update book" });
  }
};
const deleteBook = async (req, res) => {
  try {
    const bookIdToDelete = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookIdToDelete);
    if (deletedBook) {
      res.status(200).json({
        success: true,
        message: "book deleted successfully",
        data: deletedBook,
      });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book" });
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  addNewBook,
  updateBook,
  deleteBook,
};
