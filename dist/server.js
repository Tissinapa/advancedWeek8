"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const app = (0, express_1.default)();
const port = 3000;
let users = [];
app.use(express_1.default.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    res.send("Hello ts");
});
app.post("/api/user/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id, username, password } = req.body;
    //console.log("register")
    //let userinfo: User =  {username: "testi",password:"salisssss"}
    let hUsers = { id, username, password };
    let userinfo = { username: "user", password: "password" };
    //users.push({id: req.body.id, username: "testi", password: "testisalis"})
    const findUser = userinfo.username;
    if (users.length == 0) {
        const hashedPassword = yield bcrypt_1.default.hash(userinfo.password, 10);
        users.push({ id: Date.now().toString(),
            username: userinfo.username,
            password: hashedPassword
        });
        console.log(userinfo);
        res.send(userinfo);
    }
    else if (users.length >= 1) {
        if (findUser === userinfo.username) {
            console.log("löyty");
            res.sendStatus(400);
        }
        else {
            const hashedPassword = yield bcrypt_1.default.hash(userinfo.password, 10);
            users.push({ id: Date.now().toString(),
                username: userinfo.username,
                password: hashedPassword
            });
            console.log(userinfo);
            res.send(userinfo);
        }
    }
}));
app.get("/api/user/list", (req, res) => {
    res.send(users);
});
app.listen(port, () => console.log("Server listening port: " + port));
