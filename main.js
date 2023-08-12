class ProductManager {
    constructor() {
        this.products = [];
    }

    static id = 0;

    addProduct(title, descripcion, price, image, code, stock) {
        ProductManager.id++;
        this.products.push({
            title,
            descripcion,
            price,
            image,
            code,
            stock,
            id: ProductManager.id,
        });
    }

    getProducts() {
        return this.products;
    }

    existe(id) {
        return this.products.some((producto) => producto.id === id);
    }

    getProductById(id) {
        !this.existe(id) ? console.log ("Not Found") : console.log (this.existe(id));
        
    }
}

const productos = new ProductManager();

console.log(productos.getProducts());

productos.addProduct('titulo1', 'descripcion1', '1500', 'imagen1', 'abc123', 5);
productos.addProduct('titulo2', 'descripcion2', '1500', 'imagen2', 'abc124', 5);

//console.log(productos.getProducts());

productos.getProductById(3);
