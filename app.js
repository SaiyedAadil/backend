import express from "express";

const app = express()

const port = 5500;
app.use("/", (req, res) => {
    res.send("Hello World!")
})
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})