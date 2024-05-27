"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const order_1 = require("./order");
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    placeOrder(products, inventoryService) {
        for (const product of products) {
            const foundProduct = inventoryService.findProductById(product.getId());
            if (!foundProduct) {
                console.log(`Product with ID ${product.getId()} is not available.`);
                return null;
            }
        }
        const order = new order_1.Order(this.generateOrderId(), products);
        return order;
    }
    generateOrderId() {
        return 'ORDER-' + Math.random().toString(36).substr(2, 9);
    }
}
exports.User = User;
