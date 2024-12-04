import express from "express";
// import { getAllProducts, getSingleProduct, addProduct, editProduct } from "../controller/productsCtrl.js"
import { add, deleteProduct, get, update, updatePut, getProductByID, getByCategory, updateById, getByPagination } from "../controller/productsCtrl.js";

const router = express.Router();

router.get("/products", (req, res) => {
    res.status(200).json({
        message: "Welcome to Products Server!",
        crudOperations: {
            allProducts: "products/getAllProducts",
            singleProduct: "products/getProductByID/:id",
            addProductPost: "products/addProduct",
            editProducPatch: "products/editProduct/:id"
        },
        success: true,
    });
})
// Create
router.post("/products/addProduct", add)
// Read
router.get("/products/getAllProducts", get)
router.get("/products/getProductByID/:id", getProductByID)
router.get("/products/products/category/:category", getByCategory)

// Update:
router.put("/products/updateById/:_id", updateById)
router.patch("/products/updateProduct", update)
router.put("/products/fullUpdateProduct", updatePut)

// Delete
router.delete("/products/deleteProduct/:id", deleteProduct)

// Search
router.get("/products/products/search?q=keyword")

// Pagination with sort, filter=search

router.get("/products/:page/:pageSize", getByPagination)


// router.get("/getAllProducts", getAllProducts)
// router.get("/getSingleProduct/:id", getSingleProduct)
// router.post("/addProduct", addProduct)
// router.patch("/editProduct/:id", editProduct)

export default router