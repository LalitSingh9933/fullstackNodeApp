const express = require("express")
const { books } = require("./database/connection")
const app = express()
require("./database/connection")
app.use(express.json())


app.get("/", (req, res) => {

    //logic  to fetch books from database
    res.json({
        name: "Hello Lalit You are doing well"
    })
})
app.get("/books", async function (req, res) {
    const datas = await books.findAll() // select * from books  
    res.json({
        message: "Book added successfully",
        datas
    })
})
// how to insert data in database through orm function 
app.post("/books", async function (req, res) {
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
})

app.delete("/books/:id", function (req, res) {
    //logic here
    res.json({
        message: "book delete successfully"
    }

    )

})
app.patch("/books/:id", function (req, res) {
    res.json({
        message: " book  title update successfully"
    })

})

app.listen(3000, () => {
    console.log("project/secondProject is running/backend ")
})