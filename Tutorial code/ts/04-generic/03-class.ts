//1: id: number, name: string, price: number
//2: id: string, name: string, price: string

class Product<A, B, C> {
    id: A;
    name: B;
    price: C;

    constructor(id: A, name: B, price: C){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    showProductInfo(){
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}

//  Product 1:
let product1 = new Product<number, string, number>(10, "Loa", 15);
product1.showProductInfo();


//  Product 2:
let product2 = new Product<string, string, string>("10", "Loa", "15 USD");
product2.showProductInfo();