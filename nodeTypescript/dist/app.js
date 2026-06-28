import express from "express";
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    req.startTime = Date.now();
    next();
});
app.post("/user", (req, res) => {
    const { name, email } = req.body;
    res.json({ message: "user created successfully", name, email });
});
//users based on id
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ userId: id });
});
app.get("/", (req, res) => {
    res.send("hello ,ts with ex via js");
    console.log(req.startTime);
});
app.listen(3000, () => {
    console.log("server running");
});
//# sourceMappingURL=app.js.map