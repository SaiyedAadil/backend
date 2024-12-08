import { Product } from "../Models/product.js";

const addProduct = async (req, res) => {
    const newProduct = new Product({
        title: req.body?.data?.title,
        description: req.body?.data?.description,
        price: req.body?.data?.price,
        discountPercentage: req.body?.data?.discountPercentage,
        rating: req.body?.data?.rating,
        stock: req.body?.data?.stock,
        brand: req.body?.data?.brand,
        category: req.body?.data?.category,
        thumbnail: req.body?.data?.thumbnail,
        images: req.body?.data?.images,
    })
    await Product.create(newProduct);
    res.send({ message: "Product saved to the database!", success: true })
}
export { addProduct }