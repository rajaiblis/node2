const express           = require("express")
const route             = express.Route()
const {create, getAll } = require ("../actions/books")
const {isString}        = require("lodash")

router.post ("/", (req,res) => {
    let data = create (req)

    if (isString(data) === true) {
        return res.status(400).json({
            status : "error",
            message : data 
        })
    }

    return res.status(200).json({
        status : "Success",
        data,
        message : "Book Created Succes!"

    })
})

router.get ("/", async (req,res) => {
    let data = await getAll()

    return res.send({
        status : "succes",
        data,
        message: "Get all book data"
    })
})

module.exports = router
