import express, {Express, Request, Response} from "express"
import bcrypt from "bcrypt"
import passport from "passport"
import expSession from "express-session"




const app: Express = express()
const port: number = 3000




app.get("/", (req: Request, res: Response)=>{
    res.send("Hello ts")
});

app.post("/api/user/register", (req: Request, res: Response)=>{
    res.send("nothing")
})

app.listen(port, () => console.log("Server listening port: "+port));