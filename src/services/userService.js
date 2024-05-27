"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    findUserById(id) {
        return this.users.find(user => user['id'] === id);
    }
    placeOrder(userId, productIds, inventoryService) {
        const user = this.findUserById(userId);
        if (!user) {
            console.log(`User with ID ${userId} not found.`);
            return null;
        }
        const products = [];
        for (const productId of productIds) {
            const product = inventoryService.findProductById(productId);
            if (product) {
                products.push(product);
            }
            else {
                console.log(`Product with ID ${productId} not found in inventory.`);
            }
        }
        return user.placeOrder(products, inventoryService);
    }
}
exports.UserService = UserService;
