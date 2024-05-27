import { Order } from './order';
import { Product } from './product';
import { InventoryService } from '../services/inventoryService';

export class User {
    private id: string;
    private name: string;
    private email: string;

    constructor(id: string, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public placeOrder(products: Product[], inventoryService: InventoryService): Order | null {
        for (const product of products) {
            const foundProduct = inventoryService.findProductById(product.getId());
            if (!foundProduct) {
                console.log(`Product with ID ${product.getId()} is not available.`);
                return null;
            }
        }
        
        const order = new Order(this.generateOrderId(), products);
        return order;
    }

    private generateOrderId(): string {
        return 'ORDER-' + Math.random().toString(36).substr(2, 9);
    }
}