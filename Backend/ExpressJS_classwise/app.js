import express from "express";
import mongoose from "mongoose"
import defaultRouter from "./routes/defaultRoute.js";
import booksRouter from "./routes/booksRoute.js";
import productsRouter from './routes/productsRoute.js'
const app = express();
const port = 5000
app.listen(port, () => console.log(`Server is up & Running! ${port}`));

mongoose.connect("mongodb://localhost:27017/products")
    .then(() => console.log("DB Connected Successfully!"))
    .catch(err => console.log(err));

app.use("/", defaultRouter);
app.use(express.json()); /// Parses any JSON coming in req

app.use("/books", booksRouter);

app.use("/api", productsRouter)

/// HTTP METHODS - GET, POST, PATCH, PUT, DELETE
/// http://localhost:5000/users/getUsersList
/// http://localhost:5000/users/addUser
/// http://localhost:5000/users/updateUser
/// http://localhost:5000/users/deleteUser