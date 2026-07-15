const { fetchBooks, addBook, deleteBook, editBook } = require("../controllers/bookController")

const router = require("express").Router()

router.route("/books").get(fetchBooks).post(addBook)
router.route("/book/:id").delete(deleteBook).patch(editBook)

module.exports = router