import express from "express";
import type { Express, Request, Response, NextFunction } from "express";
import { user, type IUser } from "./models/User.js";
const app: Express = express();
app.use(express.json());
interface CustomRequest extends Request {
  startTime?: number;
}
app.use((req: CustomRequest, res: Response, next: NextFunction) => {
  req.startTime = Date.now();
  next();
});
interface User {
  name: string;
  email: string;
}
app.post("/user", (req: Request<{}, {}, User>, res: Response) => {
  const { name, email } = req.body;
  res.json({ message: "user created successfully", name, email });
});
//users based on id
app.get('/users/:id',(req:Request<{id:string}>,res:Response)=>{
    const {id} = req.params
    res.json({userId:id})
})
app.get("/", (req: CustomRequest, res: Response) => {
  res.send("hello ,ts with ex via js");
  console.log(req.startTime);
});

app.get("/users", async (req, res) => {
    try {
        const users = await user.find({});
        res.json(users);
    } catch (e) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
app.listen(3000, () => {
  console.log("server running");
});
