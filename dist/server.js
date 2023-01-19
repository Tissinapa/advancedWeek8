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
    console.log("register");
    let userinfo = { id, username, password };
    try {
        const hashedPassword = yield bcrypt_1.default.hash(req.body.password, 10);
        users.push({ id: Date.now().toString(),
            username: "user",
            password: hashedPassword
        });
        console.log(userinfo);
        res.send(users);
    }
    catch (_a) {
    }
}));
app.listen(port, () => console.log("Server listening port: " + port));
