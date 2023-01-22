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
    let userinfo: User =  {username: "user",password:"password"}
    //users.push({id: req.body.id, username: "testi", password: "testisalis"})
    const findUser: string = userinfo.username

    if(users.length==0){
        const hashedPassword = await bcrypt.hash(userinfo.password,10)
        //userinfo.password=hashedPassword
        users.push({id: Date.now().toString(), 
            username: userinfo.username,
            password: hashedPassword
        })
        //console.log(userinfo)
        //console.log(userinfo.password)      
        res.send(users)
    }else if(users.length>=1){
        if (findUser===userinfo.username){
            console.log("löyty")
            res.sendStatus(400)
        }else{
            const hashedPassword = await bcrypt.hash(userinfo.password,10)
            users.push({id: Date.now().toString(), 
                username: userinfo.username,
                password: hashedPassword
            })
            console.log(userinfo)      
            res.send(userinfo)
        }
    }

})
app.get("/api/user/list", (req: Request, res: Response)=>{
    res.send(users)
});


app.listen(port, () => console.log("Server listening port: "+port));