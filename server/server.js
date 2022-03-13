require("dotenv").config();
const express = require("express")
const db = require('./db') //this should automatically look for index.js file
const cors = require("cors")



const app = express()

app.use(cors())


//get all businesses

app.get("/api/v1/businesses/:query", async (req, res) => {
    
console.log("Recieved")
console.log(req.params.query)
let searchQuery = `'%${req.params.query}%'`
console.log(searchQuery)






    try {

        const results = await db.query("SELECT * FROM businesses WHERE name ILIKE $1", [`%${req.params.query}%`])


        

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



//get single business by ID

app.get("/api/v1/businesses/view/:id", async (req, res) => {
    
    console.log("Recieved")
    console.log(req.body)
  
    
        try {
    
            const results = await db.query("SELECT * FROM businesses WHERE id = $1", [req.params.id])
    
    
            
    
            console.log(results)
            
            res.status(200).json({
    
                status: "success",
                results: results.rows.length,
                data: {
                    businesses: results.rows,
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