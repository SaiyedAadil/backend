import express from "express";
// import { getAllProducts, getSingleProduct, addProduct, editProduct } from "../controller/productsCtrl.js"
import { add, deleteProduct, get, update, updatePut } from "../controller/productsCtrl.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Products Server!",
        crudOperations: {
            allProducts: "products/getAllProducts",
            singleProduct: "products/getSingleProduct/:id",
            addProductPost: "products/addProduct",
            editProducPatch: "products/editProduct/:id"
        },
        success: true,
    });
})
router.get("/getAllProducts", get)
router.post("/addProduct", add)
router.patch("/updateProduct", update)
router.put("/fullUpdateProduct", updatePut)
router.delete("/deleteProduct/:id", deleteProduct)

// router.get("/getAllProducts", getAllProducts)
// router.get("/getSingleProduct/:id", getSingleProduct)
// router.post("/addProduct", addProduct)
// router.patch("/editProduct/:id", editProduct)

export default router