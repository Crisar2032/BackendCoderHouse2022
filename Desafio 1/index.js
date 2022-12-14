class ProductManager {
    constructor() {
        this.products = [];
        this.product = Product;
    }

    getProducts() {
        return this.products;
    }

    addProduct(product) {
        if (this.getProducts().find((p) => p.code == product.code)) {
            return console.log(`Product with code ${product.code}`)
        } else {
            product.id = this.getProducts().length + 1;
            this.products.push(product);
        }
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id == id)
        if (product) {
            return console.log(product);
        } else {
            return console.log('Product not found');
        }
    }
}


class Product extends ProductManager {
    constructor(title, description, price, thumbnail, code, stock) {
        super();
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}


const newProductManager = new ProductManager()

const product1 = {
    tittle: "Galletas",
    description: "Pepitos",
    price: 58,
    thumbnail: "https://www.distribuidorapop.com.ar/wp-content/uploads/2017/07/galletitas-pepitos-venta.jpg",
    code: 10,
    stock: 12,
  };
  
  const product2 = {
    tittle: "Vaso",
    description: "Vaso de plastico",
    price: 30,
    thumbnail: "www.mate.com/img2",
    code: 20, 
    stock: 20,
  };

newProductManager.addProduct(product1);
newProductManager.addProduct(product2);


console.log("El listado de productos cargados es: ");
console.log(newProductManager.getProducts());


newProductManager.getProductById(2);

