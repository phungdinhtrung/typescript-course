//1: id: number, name: string, price: number
//2: id: string, name: string, price: string
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showProductInfo() {
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}
//  Product 1:
let product1 = new Product(10, "Loa", 15);
product1.showProductInfo();
//  Product 2:
let product2 = new Product("10", "Loa", "15 USD");
product2.showProductInfo();
