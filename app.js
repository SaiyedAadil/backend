/// PATH PAT: fullstack-developer-academy\classroom\Backend\ExpressJS_classwise
import express from "express";
import mongoose from "mongoose";
import courseRouter from "./routes/courseRoute.js"
const app = express()

const port = 5500;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

mongoose.connect("mongodb://localhost:27017/firstPrj")
    .then(() => console.log("DB Connected Successfully!"))
    .catch(err => console.log(err))

app.use(express.json())
app.use("/courses", courseRouter)
app.use("/", (req, res) => {
    res.send("Hello World!")
})
