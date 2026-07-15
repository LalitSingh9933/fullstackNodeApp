const express = require("express")
 const bookRoute = require("./routes/bookRoute")
const app = express()
require("./database/connection")
app.use(express.json())
app.use("/api/",bookRoute)
app.listen(3000, () => {
    console.log("project/secondProject is running/backend ")
})