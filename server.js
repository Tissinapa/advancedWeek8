const express = require("express")
const app = express()
const port = 3000


app.get("/", (req, res)=>{
    res.send("Hello")
});

app.post("/api/user/register", (req,res)=>{
    
})

app.listen(port, () => console.log("Server listening port: "+port));