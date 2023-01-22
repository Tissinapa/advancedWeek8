import express, {Express, Request, response, Response} from "express"
import bcrypt from "bcrypt"
import passport from "passport"
import expSession from "express-session"




const app: Express = express()
const port: number = 3000

interface User{
    username: string
    password: any
}
interface HashedUsers{
    id?: any
    username: string
    password: any
}
let users: (HashedUsers)[]=[]

app.use(express.urlencoded({extended: false}))


app.get("/", (req: Request, res: Response)=>{
    res.send("Hello ts")
});

app.post("/api/user/register", async (req: Request, res: Response)=>{
    let {id,username,password} = req.body
    //console.log("register")
    //let userinfo: User =  {username: "testi",password:"salisssss"}
    let hUsers: HashedUsers =  {id, username, password}
    //users.push()
    //console.log(userinfo.username)
    //users.push(userinfo)
    //users.push({username: "testi", password:"salis"})
    //users.push({username: "testi1", password:"salis23"})
    //users.push({id: req.body.id, username: "testi", password: "testisalis"})
 
    try {
        let userinfo: User =  {username: "user",password:"password"}
    
        const hashedPassword = await bcrypt.hash(userinfo.password,10)
        //const userinfo: User = {id: req.body.id,
        //    username: req.body.username,
        //    password: hashedPassword}
        //users.push(userinfo)
        //console.log(req.body.username)
        
        users.push({id: Date.now().toString(), 
            username: userinfo.username,
            password: hashedPassword
        })
        
        console.log(userinfo)      
        res.send(userinfo)
    } catch {
        
    }
})
app.get("/api/user/list", (req: Request, res: Response)=>{
    res.send(users)
});


app.listen(port, () => console.log("Server listening port: "+port));