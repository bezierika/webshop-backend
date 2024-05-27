"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../src/models/product");
const inventoryService_1 = require("../src/services/inventoryService");
const user_1 = require("../src/models/user");
const userService_1 = require("../src/services/userService");
const product1 = new product_1.Product("1", "Laptop", 1500, "Dell laptop");
const product2 = new product_1.Product("2", "Egér", 50, " Hama vezetékes egér");
const product3 = new product_1.Product("3", "Billentyűzet", 100, "USB-s billentyűzet");
const inventoryService = new inventoryService_1.InventoryService();
inventoryService.addProduct(product1);
inventoryService.addProduct(product2);
inventoryService.addProduct(product3);
const userService = new userService_1.UserService();
const user = new user_1.User("user1", "Kiss Nóra", "kiss.nora@email.com");
userService.addUser(user);
console.log("Termékek a készletben:");
console.log(inventoryService.listProducts());
console.log("\nNóra rendel egy Laptopot és egy billenytűzetet:");
const order = userService.placeOrder("user1", ["1", "3"], inventoryService);
if (order) {
    console.log(`Rendelés ID: ${order.getId()}`);
    console.log(`Rendelés összértéke: ${order.summarizeOrder()}`);
    console.log(`Rendelés állapota: ${order.getStatus()}`);
}
else {
    console.log("Hiba a rendelés során. Sikertelen rendelés!");
}
console.log("\nKészleten levő termékek rendelést követően:");
console.log(inventoryService.listProducts());
