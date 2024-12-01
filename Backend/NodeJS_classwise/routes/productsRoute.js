import express from "express";
import { addProducts, deleteProduct, editProduct, getAllProducts } from "../controller/ProductsCtrl/productsCtrl.js";
const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json(
        {
            message: "welcome to Products",
            success: true,
            routes: {
                getAllProducts: "products/getAllProducts"
            }
        }
    );
})
router.get("/getAllProducts", getAllProducts)
router.post("/addProduct", addProducts)
router.patch("/editProduct/:id", editProduct)
router.delete("/deleteProduct/:id", deleteProduct)

export default router

