const express = require("express")
const app = express()
require("./database/connection")

app.get("/", (req, res) => {

    //logic  to fetch books from database
    res.json({
        name: "Hello Lalit You are doing well"
    })
})
app.post("/books", function (req, res) {
    //logic to add book to database goes here...
    res.json({
        message: "Book added successfully"
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