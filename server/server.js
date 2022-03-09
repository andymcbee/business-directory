require("dotenv").config();
const express = require("express")
const db = require('./db') //this should automatically look for index.js file



const app = express()



app.get("/api/v1/businesses", async (req, res) => {
    


    try {

        const results = await db.query("SELECT * FROM businesses")

        console.log(results)
        
        res.status(200).json({

            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows,
            },

        })

    } catch (err) {
        console.log(err)
    }
    

})







const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}!`)
})