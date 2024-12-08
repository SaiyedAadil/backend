import express from "express";
import mongoose from "mongoose"
import defaultRouter from "./routes/defaultRoute.js";
import booksRouter from "./routes/booksRoute.js";
import productsRouter from './routes/productsRoute.js'
const app = express();
const port = 5000
app.listen(port, () => console.log(`Server is up & Running! ${port}`));
const dbURL = process.env.DB_URL;
// const connectionLocalString = "mongodb://localhost:27017/products"
mongoose.connect(dbURL)
    .then(() => console.log("DB Connected Successfully!"))
    .catch(err => console.log(err));

app.use(express.json())

const middleware = (req, res, next) => {
    console.log(req.body);
    if (req.body.allow) {
        next()
    } else {
        res.status(401).send({ message: "Unauthorized!", success: false })
    }
}
app.use(express.json()); /// Parses any JSON coming in req
app.use("/", middleware, defaultRouter);

app.use("/api", productsRouter)

// app.use("/books", booksRouter);

/// HTTP METHODS - GET, POST, PATCH, PUT, DELETE
/// http://localhost:5000/users/getUsersList
/// http://localhost:5000/users/addUser
/// http://localhost:5000/users/updateUser
/// http://localhost:5000/users/deleteUser