export class Product {
    private id: string;
    private name: string;
    private price: number;
    private description: string;

    constructor(id: string, name: string, price: number, description: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public getDescription(): string | undefined {
        return this.description;
    }
}
