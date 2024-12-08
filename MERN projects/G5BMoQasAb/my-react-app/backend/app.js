import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import { Product } from "./Models/product.js";
import { isAuth } from "./middleware/auth.js";
import { allProducts } from "./controllers/allProductsCtrl.js";
import { singleProduct } from "./controllers/singleProductCtrl.js";
import { addProduct } from "./controllers/addProductCtrl.js";
import { updateProduct } from "./controllers/updateProductCtrl.js";
import { delProd } from "./controllers/delProdCtrl.js";
mongoose.connect("mongodb://127.0.0.1/ECommerce")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Could not Connect to MongoDB"))
const app = express()
const port = 5000;
app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));

app.use(isAuth)

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
});
// app.get("/", (req, res) => {
//     res.send("Hello World!")
// })
app.get("/get/:id", singleProduct)
app.post("/create", addProduct)

//Get the all product list
app.get("/read", allProducts)

//Update a product based on the id
app.patch("/update/:id", updateProduct)

// Delete a product based on the id
app.delete("/delete/:id", delProd)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);

})