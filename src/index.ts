import { Product } from "../src/models/product";
import { InventoryService } from "../src/services/inventoryService";
import { User } from "../src/models/user";
import { UserService } from "../src/services/userService";


const product1 = new Product("1", "Laptop", 1500, "Dell laptop");
const product2 = new Product("2", "Egér", 50, " Hama vezetékes egér");
const product3 = new Product("3", "Billentyűzet", 100, "USB-s billentyűzet");

const inventoryService = new InventoryService();
inventoryService.addProduct(product1);
inventoryService.addProduct(product2);
inventoryService.addProduct(product3);

const userService = new UserService();
const user = new User("user1", "Kiss Nóra", "kiss.nora@email.com");
userService.addUser(user);

console.log("Termékek a készletben:");
console.log(inventoryService.listProducts());

console.log("\nNóra rendel egy Laptopot és egy billenytűzetet:");
const order = userService.placeOrder("user1", ["1", "3"], inventoryService);
if (order) {
    console.log(`Rendelés ID: ${order.getId()}`);
    console.log(`Rendelés összértéke: ${order.summarizeOrder()}`);
    console.log(`Rendelés állapota: ${order.getStatus()}`);
} else {
    console.log("Hiba a rendelés során. Sikertelen rendelés!");
}

console.log("\nKészleten levő termékek rendelést követően:");
console.log(inventoryService.listProducts());