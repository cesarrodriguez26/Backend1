class ProductManager {
    constructor() {
        this.products = [];
    }

    static id = 0;

    addProduct(title, descripcion, price, image, code, stock) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                console.log(`el codigo ${code} esta repetido`);
                break;
            }
        }

        const newProduct = {
            title,
            descripcion,
            price,
            image,
            code,
            stock, 
        }
         if (!Object.values(newProduct).includes(undefined)){
            ProductManager.id++;
            this.products.push({ ...newProduct,
                id: ProductManager.id,
            });
         } else {
           console.log("Todos los campos son requeridos") 
         }

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
//primera llamada=vacia

console.log(productos.getProducts());

//agregamos los productos
productos.addProduct('titulo1', 'descripcion1', '1000', 'imagen1', 'abc123', 5);
productos.addProduct('titulo2', 'descripcion2', '1500', 'imagen2', 'abc124', );

//segunda llamada=arreglo de producto
console.log(productos.getProducts());

//validacion de CODE repetido
productos.addProduct('titulo3', 'descripcion3', '2000', 'imagen3', 'abc124', 7);


//busqueda de producto por ID
productos.getProductById(2);

//buscar por ID no encontrado

productos.getProductById(3);


