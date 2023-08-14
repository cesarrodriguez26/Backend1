import * as express from "espress"
import ProductManager from "./components/ProductManager"

const app = express()
app.use(express.urlencoded({extended: true}));

const productos = new ProductManager()

