class Product {
    constructor(name, price, stockQty) {
        this.name = name;
        this.price = price;
        this.stockQuantity = stockQty;
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    createProduct(product) {
        this.products.push(product);
    }

    calculateTotal() {
        let total = 0;
        for (let i = 0; i < this.products.length; i++) {
            total += this.products[i].price * this.products[i].stockQuantity;
        }
        return total;
    }

    handleAddition(name, price, stockQty) {
        let existingProduct = this.products.find((p) => p.name === name);
        if (existingProduct) {
            existingProduct.stockQuantity += stockQty;
        } else {
            let newProduct = new Product(name, price, stockQty + stockQty);
            this.createProduct(newProduct);
        }
        if (price === undefined) {
            console.log("please enter price");
        }
    }

    handleRemoval(name, quantity) {
        let productIndex = this.products.findIndex((p) => p.name === name);
        if (productIndex !== -1) {
            if (quantity <= this.products[productIndex].stockQuantity) {
                this.products[productIndex].stockQuantity -= quantity;
                if (this.products[productIndex].stockQuantity === 0) {
                    this.products.splice(productIndex, 1);
                }
            } else {
                console.log("Insufficient stock quantity.");
            }
        } else {
            console.log("Product not found in cart.");
        }
    }

    applyDiscount(discount) {
        let total = this.calculateTotal();
        console.log("Before Discount:", total);
        console.log("After Discount:");
        let discountAmount = (total * discount) / 100;
        return total - discountAmount;
    }
}

const product1 = new Product("Laptop", 5000, 5);
const product2 = new Product("P-2", 5000, 5);
const product3 = new Product("P-3", 5000, 5);

const shoppingCart = new ShoppingCart();
shoppingCart.createProduct(product1);
shoppingCart.createProduct(product2);
shoppingCart.createProduct(product3);
console.log(shoppingCart.products);

console.log("Original Total:", shoppingCart.calculateTotal());

shoppingCart.handleAddition("iPhone", 500, 1);
console.log(shoppingCart.products);

shoppingCart.handleRemoval("Laptop", 2);
console.log(shoppingCart.products);

const discountedTotal = shoppingCart.applyDiscount(50);
console.log("After Discount Total:", discountedTotal);

