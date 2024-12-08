import { Product } from "../Models/product.js";

const allProducts = async (req, res) => {
    const productList = await Product.find();
    res.send({ message: "READ products", success: true, data: productList });
}

export { allProducts }