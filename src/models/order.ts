import { Product } from './product';

enum OrderStatus {
    New = "Új rendelés",
    Processing = "Feldolgozás alatt",
    Shipped = "Kiszállítva"
}

export class Order {
    private id: string;
    private products: Product[];
    private status: OrderStatus;

    constructor(id: string, products: Product[]) {
        this.id = id;
        this.products = products;
        this.status = OrderStatus.New;
    }

    public updateStatus(status: OrderStatus): void {
        this.status = status;
    }

    public summarizeOrder(): number {
        return this.products.reduce((total, product) => total + product.getPrice(), 0);
    }

    public getStatus(): OrderStatus {
        return this.status;
    }

    public getId(): string {
        return this.id;
    }

    public getProducts(): Product[] {
        return this.products;
    }
}