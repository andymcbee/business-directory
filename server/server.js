require("dotenv").config();
const express = require("express")


const app = express()

app.get("/getbusinesses", (req, res) => {
    res.status(200).json({
        status: "success",
        name: "mcdonalds",
    })
})

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}!`)
})