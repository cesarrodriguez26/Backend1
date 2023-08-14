import { promises as fs } from "fs"

export default class ProductManager {
    constructor() {
        this.patch = "./productos.txt";
        this.products = [];
    }

    static id = 0;

    addProduct = async (title, descripcion, price, imagen, code, stock) => {
        ProductManager.id++;
        let newProduct = {
            title,
            descripcion,
            price,
            imagen,
            code,
            stock, 
            id: ProductManager.id,
        };

        this.products.push(newProduct);

        await fs.writeFile(this.patch, JSON.stringify(this.products));
    };
        readProducts = async () => {
            let respuesta = await fs.readFile(this.patch, "utf-8");
            return JSON.parse(respuesta);
        };

        getProducts = async () => {

        };

        getProductsById = async (id) => {

        };

        deleteProductsById = async (id) => {
            let respuesta3 = await this.readProducts();
            let productFilter = respuesta3.filter((products) => products.id !=id);
            await fs.writeFile(this.patch, JSON.stringify(productFilter));
            console.log("Producto Eliminado");
        };
        
        updateProducts = async ({ id, ...producto }) => {
            await this.deleteProductsById(id);
            let productOld = await this.readProducts();
            let productsModif = [{...producto, id}, ...productOld];
            await fs.writeFile(this.patch, JSON.stringify(productsModif));
        };
    }

        //const productos = new ProductManager();

       /* productos.addProduct('titulo1', 'descripcion1', '1000', 'imagen1', 'abc121', 1);
        productos.addProduct('titulo2', 'descripcion2', '1000', 'imagen2', 'abc122', 2);
        productos.addProduct('titulo3', 'descripcion3', '1000', 'imagen3', 'abc123', 3);
        productos.addProduct('titulo4', 'descripcion4', '1000', 'imagen4', 'abc124', 4);
        productos.addProduct('titulo5', 'descripcion5', '1000', 'imagen5', 'abc125', 5);
        productos.addProduct('titulo6', 'descripcion6', '1000', 'imagen6', 'abc126', 6);
        productos.addProduct('titulo7', 'descripcion7', '1000', 'imagen7', 'abc127', 7);
        productos.addProduct('titulo8', 'descripcion8', '1000', 'imagen8', 'abc128', 8);
        productos.addProduct('titulo9', 'descripcion9', '1000', 'imagen9', 'abc129', 9);
        productos.addProduct('titulo10', 'descripcion10', '1000', 'imagen10', 'abc130', 2);

        //productos.getProducts();
        
        //productos.getProductsById(3);

        //productos.deleteProductsById(2);

        /*productos.updateProducts ({
            title: "titulo3",
            descripcion:"descripcion3",
            price: 4000,
            imagen: "imagen3",
            code: "abc123",
            stock: "20",
            id: 3,
        });
        */
       
    
