"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["New"] = "\u00DAj rendel\u00E9s";
    OrderStatus["Processing"] = "Feldolgoz\u00E1s alatt";
    OrderStatus["Shipped"] = "Kisz\u00E1ll\u00EDtva";
})(OrderStatus || (OrderStatus = {}));
class Order {
    constructor(id, products) {
        this.id = id;
        this.products = products;
        this.status = OrderStatus.New;
    }
    updateStatus(status) {
        this.status = status;
    }
    summarizeOrder() {
        return this.products.reduce((total, product) => total + product.getPrice(), 0);
    }
    getStatus() {
        return this.status;
    }
    getId() {
        return this.id;
    }
    getProducts() {
        return this.products;
    }
}
exports.Order = Order;
