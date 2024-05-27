import { Product } from '../models/product';

export class InventoryService {
    private products: Product[] = [];

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public removeProduct(id: string): void {
        this.products = this.products.filter(product => product.getId() !== id);
    }

    public findProductById(id: string): Product | undefined {
        return this.products.find(product => product.getId() === id);
    }

    public findProductByName(name: string): Product | undefined {
        return this.products.find(product => product.getName() === name);
    }

    public listProducts(): Product[] {
        return this.products;
    }
}
