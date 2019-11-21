const express = require('express')
const app = express()
require ("./db")

const index_routes = require("./routes/index")
const book_routes = require("./routes/book")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Hello darkness my old friend i'\m ihsandroid`)
})

app.use("index", index_routes)
app.use("book", book_routes)
app.use("/user",users)

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})