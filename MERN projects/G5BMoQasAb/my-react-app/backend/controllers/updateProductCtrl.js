import { Product } from "../Models/product.js";

const updateProduct = async (req, res) => {
    const product_id = req.params.id;
    console.log(product_id);

    await Product.findByIdAndUpdate(product_id, {
        title: req.body.data.title,
        description: req.body.data.description,
        price: req.body.data.price,
        discountPercentage: req.body.data.discountPercentage,
        rating: req.body.data.rating,
        stock: req.body.data.stock,
        brand: req.body.data.brand,
        category: req.body.data.category,
        thumbnail: req.body.data.thumbnail,
        images: req.body.data.images,
    })
    res.send({ message: "Product updated successfully!", success: true })
}

export { updateProduct }