import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, set: (v) => v.toLowerCase(), required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true },
    stock: { type: Number, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, default: Date.now },
})

// name:
// price:
// description:
// category:
// brand:
// rating:
// stock:

// "name":
// "price":
// "description":
// "category":
// "brand":
// "rating":
// "stock":

const productModel = mongoose.model("product", productsSchema)
export default productModel