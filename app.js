const express = require("express")
 const bookRoute = require("./routes/bookRoute")
  const cors = require("cors")
const app = express()
require("./database/connection")
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json())
app.use("/api/books",bookRoute)
app.listen(3000, () => {
    console.log("project/secondProject is running/backend ")
})