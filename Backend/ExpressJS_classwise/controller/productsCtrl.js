import productModel from "../models/productModel.js"
import { getOptions } from "../utils/utils.js"
const get = async (req, res) => {
    try {
        const products = await productModel.find()   /// db.collection.<-- addressing
        const totalRecords = await productModel.countDocuments()
        res.status(200).json({ message: "Products Fetched Successfully!", success: true, data: products, totalRecords })
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error!", success: false, })
    }
}
const getProductByID = async (req, res) => {
    try {
        const prodId = req.params.id;
        const product = await productModel.findById({ _id: prodId })
        res.status(200).json({ message: "Product Fetched By ID Successfully!", success: true, product })
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error!", success: false, })
    }
}
const getByCategory = async (req, res) => {
    try {
        const category = req.params.category.toLowerCase(); // Convert to lowercase
        console.log(category); // Log the category received from the route
        const product = await productModel.findOne({ category });

        if (!product) {
            return res.status(404).json({
                message: "No product found for this category!",
                success: false,
            });
        }

        res.status(200).json({
            message: "Product Fetched By Category Successfully!",
            success: true,
            product,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!",
            success: false,
        });
    }
};
const getByPagination = async (req, res) => {
    try {
        const { sort, skip, dir, pageSize, filter } = getOptions(req)
        const totalRecords = await productModel.countDocuments()
        const products = await productModel
            .find(filter)
            .sort({ [sort]: dir })
            .skip(skip)
            .limit(pageSize)  /// db.collection.<-- addressing
        res.status(200).json({ message: "Products Fetched Successfully!", success: true, data: products, totalRecords })

    } catch (error) {

    }
}
const add = async (req, res) => {
    try {
        const data = req.body;
        data.createdAt = new Date();
        const product = new productModel(data);
        await product.save();
        res.status(201).json({ message: "Product Added Successfully!", success: true });
    } catch (e) {
        console.log("error", e);
        res.status(500).json({ message: "Internal Server Error!", success: false });
    }
};
const update = async (req, res) => {
    try {
        const productId = req.body._id;
        const updateData = req.body;
        delete updateData._id;
        await productModel.findOneAndUpdate({ _id: productId }, updateData);
        res.status(200).json({ message: "Product updated Successfully!", success: true });
    } catch (error) {
        console.log("error", e);
        res.status(500).json({ message: "Internal Server Error!", success: false });
    }
};
const updateById = async (req, res) => {
    try {
        const productId = req.params._id;
        const updateData = req.body;
        await productModel.findOneAndUpdate(
            { _id: productId },
            {
                $set: {
                    name: updateData.name,
                    price: updateData.price,
                    description: updateData.description,
                    category: updateData.category,
                    brand: updateData.brand,
                    rating: updateData.rating,
                }
            }
        )
        delete updateData._id;
        res.status(200).json({ message: "Specific Product Updated By Id Successfully!", success: true });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error!", success: false });
    }

}
const updatePut = async (req, res) => {
    try {
        const productId = req.body._id;
        const updateData = req.body;
        delete updateData._id;
        await productModel.findOneAndUpdate(
            { _id: productId },
            {
                $set: {
                    name: updateData.name,
                    price: updateData.price,
                    description: updateData.description,
                    category: updateData.category,
                    brand: updateData.brand,
                    rating: updateData.rating
                    // stock: updateData.stock
                },
            }
        );
        res.status(200).json({ message: "Product Updated Successfully!", success: true });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error!", success: false });
    }
};
const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        await productModel.findOneAndDelete({ _id: productId });
        // if (!productId) {
        //     return res.status(404).json({
        //         message: `No product found for id: ${productId} !`,
        //         success: false,
        //     });
        // }
        res.status(200).json({ message: "Product Deleted Successfully!", success: true });
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error!", success: false });
    }
};
export { get, add, update, updatePut, deleteProduct, getProductByID, getByCategory, updateById, getByPagination }
// const allProducts = [
//     {
//         "id": 1,
//         "name": "Apple iPhone 14 Pro",
//         "description": "6.1-inch smartphone with quad-camera setup",
//         "price": 999.99,
//         "category": "Electronics",
//         "brand": "Apple",
//         "rating": 4.5,
//         "stock": 10,
//         "images": [
//             "iphone14pro_1.jpg",
//             "iphone14pro_2.jpg",
//             "iphone14pro_3.jpg"
//         ]
//     },
//     {
//         "id": 2,
//         "name": "Samsung Galaxy S22 Ultra",
//         "description": "6.8-inch smartphone with quad-camera setup",
//         "price": 1099.99,
//         "category": "Electronics",
//         "brand": "Samsung",
//         "rating": 4.3,
//         "stock": 5,
//         "images": [
//             "galaxys22ultra_1.jpg",
//             "galaxys22ultra_2.jpg",
//             "galaxys22ultra_3.jpg"
//         ]
//     },
// ]
// const getAllProducts = (req, res) => {
//     res.status(200).json(allProducts)
// }
// const addProduct = (req, res) => {
//     let prod = req.body;
//     prod.id = allProducts[allProducts.length - 1].id + 1;
//     allProducts.push(prod)
//     res.status(201);
//     res.status(201).json({ message: "Product Added Successfully!", success: true })
// }
// const editProduct = (req, res) => {
//     console.log(req.params);
//     let prodId = req.params.id;
//     let updatedProduct = req.body;

//     let prodInx = allProducts.findIndex(ele => ele.id === parseInt(prodId))

//     if (prodInx > -1) {
//         let objProduct = { ...allProducts[prodInx] };
//         objProduct = {
//             ...objProduct,
//             ...updatedProduct,
//         }
//         allProducts[prodInx] = objProduct;
//         res.status(200).json({ message: "Product Updated Successfully", success: true })
//     } else {
//         res.status(404);
//         res.json({ message: "Product Not Found", success: false })
//     }
// }
// const getSingleProduct = (req, res) => {
//     let prodId = req.params.id;
//     let prodInx = allProducts.findIndex(ele => ele.id === parseInt(prodId))

//     if (prodInx > -1) {
//         res.status(200).json(allProducts[prodInx])
//     } else {
//         res.status(404);
//         res.json({ message: "Book Doesn't Exist!", success: false });
//     }
//     res.status(200).json({ message: "jjjjjjjjjj", success: true })
// }

// export { getAllProducts, getSingleProduct, addProduct, editProduct }



