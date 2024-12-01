const allProducts = [
    {
        "id": 1,
        "name": "Apple iPhone 14 Pro",
        "description": "6.1-inch smartphone with quad-camera setup",
        "price": 999.99,
        "category": "Electronics",
        "brand": "Apple",
        "rating": 4.5,
        "stock": 10,
        "images": [
            "iphone14pro_1.jpg",
            "iphone14pro_2.jpg",
            "iphone14pro_3.jpg"
        ]
    },
    {
        "id": 2,
        "name": "Samsung Galaxy S22 Ultra",
        "description": "6.8-inch smartphone with quad-camera setup",
        "price": 1099.99,
        "category": "Electronics",
        "brand": "Samsung",
        "rating": 4.3,
        "stock": 5,
        "images": [
            "galaxys22ultra_1.jpg",
            "galaxys22ultra_2.jpg",
            "galaxys22ultra_3.jpg"
        ]
    },
]
const getAllProducts = (req, res) => {
    res.status(200).json(allProducts)
}
const addProduct = (req, res) => {
    let prod = req.body;
    prod.id = allProducts[allProducts.length - 1].id + 1;
    allProducts.push(prod)
    res.status(201);
    res.status(201).json({ message: "Product Added Successfully!", success: true })
}
const editProduct = (req, res) => {
    console.log(req.params);
    let prodId = req.params.id;
    let updatedProduct = req.body;

    let prodInx = allProducts.findIndex(ele => ele.id === parseInt(prodId))

    if (prodInx > -1) {
        let objProduct = { ...allProducts[prodInx] };
        objProduct = {
            ...objProduct,
            ...updatedProduct,
        }
        allProducts[prodInx] = objProduct;
        res.status(200).json({ message: "Product Updated Successfully", success: true })
    } else {
        res.status(404);
        res.json({ message: "Product Not Found", success: false })
    }
}
const getSingleProduct = (req, res) => {
    let prodId = req.params.id;
    let prodInx = allProducts.findIndex(ele => ele.id === parseInt(prodId))

    if (prodInx > -1) {
        res.status(200).json(allProducts[prodInx])
    } else {
        res.status(404);
        res.json({ message: "Book Doesn't Exist!", success: false });
    }
    res.status(200).json({ message: "jjjjjjjjjj", success: true })
}

export { getAllProducts, getSingleProduct, addProduct, editProduct }