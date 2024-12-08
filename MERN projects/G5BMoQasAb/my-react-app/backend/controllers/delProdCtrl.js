import { Product } from "../Models/product.js";

const delProd = async (req, res) => {
    const product_id = req.params.id;
    await Product.findByIdAndDelete(product_id);
    res.send({ message: "Product Deleted!", success: true });
}
export { delProd }