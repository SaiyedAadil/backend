import { Product } from "../Models/product.js";

const singleProduct = async (req, res) => {
    const product = await Product.findById(req.params.id)
    console.log(product);

    res.send({ message: "Product Get By ID Successfully!", success: true, data: product })

}

export { singleProduct }

