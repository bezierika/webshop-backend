import { User } from '../models/user';
import { Product } from '../models/product';
import { InventoryService } from './inventoryService';
import { Order } from '../models/order';

export class UserService {
    private users: User[] = [];

    public addUser(user: User): void {
        this.users.push(user);
    }

    public findUserById(id: string): User | undefined {
        return this.users.find(user => user['id'] === id);
    }

    public placeOrder(userId: string, productIds: string[], inventoryService: InventoryService): Order | null {
        const user = this.findUserById(userId);
        if (!user) {
            console.log(`User with ID ${userId} not found.`);
            return null;
        }

        const products: Product[] = [];
        for (const productId of productIds) {
            const product = inventoryService.findProductById(productId);
            if (product) {
                products.push(product);
            } else {
                console.log(`Product with ID ${productId} not found in inventory.`);
            }
        }

        return user.placeOrder(products, inventoryService);
    }
}
