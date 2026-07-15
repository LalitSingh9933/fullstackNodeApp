const { books } = require("../database/connection");

const fetchBooks = async function (req, res) {
    const datas = await books.findAll() // select * from books  
    res.json({
        message: "Book added successfully",
        datas
    })
}
const addBook =  async function (req, res) {
    try {
        console.log(req.body);
        const { bookName, bookPrice, bookAuther, bookGenre } = req.body;

        //validation
        if (!bookName?.trim() || !bookPrice || !bookAuther?.trim() ||!bookGenre?.trim()) {
            return res.status(400).json({
                success: false,
                message: "All fields are required "

            });
        }
        await books.create({
            bookName: bookName,
            bookPrice: bookPrice,
            bookAuther: bookAuther,
            bookGenre: bookGenre
        });
        res.status(201).json({
            success: true,
            message: "Book added succeessfully"
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        })
    }
}
const deleteBook =  function (req, res) {

    res.json({
        message: "book delete successfully"
    }

    )
}
const editBook = function (req, res) {
    res.json({
        message: " book  title update successfully"
    })

}
module.exports ={fetchBooks,addBook,deleteBook,editBook}