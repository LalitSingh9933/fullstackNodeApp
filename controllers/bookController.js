const { where } = require("sequelize");
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
        const body = req.body || {};
        const { bookName, bookPrice, bookAuther, bookGenre } = body;

        //validation
        if (!String(bookName || "").trim() || !bookPrice || !String(bookAuther || "").trim() || !String(bookGenre || "").trim()) {
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
const deleteBook =  async function (req, res) {
const id = req.params.id 
 await books.destory({
    where: {
        id
    }
})
    res.json({
        message: "book delete successfully"
    }

    )
}
const editBook =  async function (req, res) {
   const id =  req.params.id
   const body = req.body || {}
   const {bookName,bookPrice,bookAuther,bookGenre} = body
    await books.update({bookName: bookName, bookPrice:bookPrice, bookAuther:bookAuther, bookGenre:bookGenre},{
    where :{
        id
    }
   })
    
    res.json({
        message: " book  title update successfully"
    })

}
const singleFetchBook = async function(req,res){
    //first capture what id is he/she sending
    const id = req.params.id
    const data = await books.findByPk(id) //finByPk always return object
    // const datas = books.findAll({ // This is another way of fetching single data  it always return array
    //     where: {
    //         id : id
    //     }
    // })
    res.json({
        message: "Single Book fetched successfully",
        data
    })
}
module.exports ={fetchBooks,addBook,deleteBook,editBook,singleFetchBook}