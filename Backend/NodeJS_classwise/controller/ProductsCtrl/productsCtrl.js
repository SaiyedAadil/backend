let allProducts = [
    {
        id: 1,
        name: "Mobile",
        description: "abcd"
    },
    {
        id: 2,
        name: "Laptop",
        description: "efgh"
    },
]

const getAllProducts = (req, res) => {
    res.status(200).json(allProducts)
}
const addProducts = (req, res) => {
    const product = req.body;
    product.id = allProducts[allProducts.length - 1].id + 1
    allProducts.push(product)
    res.status(201).json({ message: "Product added Successfully!!!", sucess: true })
}
const editProduct = (req, res) => {
    const prodId = req.params.id
    const updatedProduct = req.body;
    const prodInx = allProducts.findIndex(ele => ele.id === parseInt(prodId))
    if (prodInx > -1) {
        let objProduct = { ...allProducts[prodInx] }
        objProduct = {
            ...objProduct,
            ...updatedProduct
        }
        allProducts[prodInx] = objProduct
        res.status(200).json({ message: "Product Updated Successfully!!!", sucess: true })
    } else {
        res.status(404).json({ message: "Product Not Found", success: false })
    }

}
const deleteProduct = (req, res) => {
    const prodId = req.params.id;
    const prodInx = allProducts.findIndex(ele => ele.id === parseInt(prodId))
    if (prodInx > -1) {
        let prodArr = allProducts.filter((ele, idx) => idx !== prodInx)
        allProducts = prodArr;
        res.status(200).json({ message: "Product Deleted Successfully!!!", sucess: true })
    } else {
        res.status(404).json({ message: "Product Doesn't Found", success: false })
    }


}
export { getAllProducts, addProducts, editProduct, deleteProduct }