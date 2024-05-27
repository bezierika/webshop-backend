"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
class InventoryService {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(id) {
        this.products = this.products.filter(product => product.getId() !== id);
    }
    findProductById(id) {
        return this.products.find(product => product.getId() === id);
    }
    findProductByName(name) {
        return this.products.find(product => product.getName() === name);
    }
    listProducts() {
        return this.products;
    }
}
exports.InventoryService = InventoryService;
