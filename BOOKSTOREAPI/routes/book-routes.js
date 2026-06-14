const express = require("express");
const {
  getAllBooks,
  getSingleBook,
  addNewBook,
  updateBook,
  deleteBook,
} = require("../controller/book-controller.js");
const app = express();
const router = express.Router();
//the routes :

router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBook);
router.post("/add", addNewBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

module.exports = router; //never forget to export the router so that it can be used in server.js
