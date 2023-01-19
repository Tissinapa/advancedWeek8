import express, {Express, Request, Response} from "express"
import bcrypt from "bcrypt"
import passport from "passport"
import expSession from "express-session"




const app: Express = express()
const port: number = 3000

interface User{
    id: any
    username: string
    password: any
}
let users: (User)[]=[]

app.use(express.urlencoded({extended: false}))


app.get("/", (req: Request, res: Response)=>{
    res.send("Hello ts")
});

app.post("/api/user/register", async (req: Request, res: Response)=>{
    let {id,username,password} = req.body
    console.log("register")
    let userinfo: User =  {id,username,password}

    try {
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        users.push({id: Date.now().toString(),
            username: "user",
            password: hashedPassword
        })

        console.log(userinfo)
        res.send(users)
    } catch {
        
    }
})

app.listen(port, () => console.log("Server listening port: "+port));