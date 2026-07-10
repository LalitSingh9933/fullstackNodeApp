const express = require("express")
const { books } = require("./database/connection")
const app = express()
require("./database/connection")


app.get("/", (req, res) => {

    //logic  to fetch books from database
    res.json({
        name: "Hello Lalit You are doing well"
    })
})
app.get("/books",async function (req, res) {
   const datas= await books.findAll() // select * from books  
    res.json({
        message: "Book added successfully",
        datas
    })
})
app.post("/books",async function (req, res) {
   const datas= await books.findAll() // select * from books  
    res.json({
        message: "Book added successfully",
        datas
    })
})

app.delete("/books/:id", function (req, res) {
    //logic here
    res.json({
        message: "book delete successfully"
    }

    )

})
app.patch("/books/:id",function(req,res){
    res.json({
         message:" book  title update successfully"
    })
   
})

app.listen(3000, () => {
    console.log("project/secondProject is running/backend ")
})