"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductoController {
    // Método para listar los productos
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productos = yield database_1.default.query('SELECT * FROM producto');
                res.json(productos.rows); // En PostgreSQL los resultados están en `rows`
            }
            catch (error) {
                res.status(500).json({ message: 'Error al obtener productos', error });
            }
        });
    }
    // Método para crear un nuevo producto
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { codigo, nombre, precio, cantidad, caracteristicas, imagen } = req.body;
                const query = 'INSERT INTO producto (codigo, nombre, precio, cantidad, caracteristicas, imagen) VALUES ($1, $2, $3, $4, $5, $6)';
                yield database_1.default.query(query, [codigo, nombre, precio, cantidad, caracteristicas, imagen]);
                res.json({ message: 'Se guardó un producto' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al crear producto', error });
            }
        });
    }
    // Método para actualizar un producto
    actualiza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { codigo } = req.params;
                const { nombre, precio, cantidad, caracteristicas, imagen } = req.body;
                const query = 'UPDATE producto SET nombre = $1, precio = $2, cantidad = $3, caracteristicas = $4, imagen = $5 WHERE codigo = $6';
                yield database_1.default.query(query, [nombre, precio, cantidad, caracteristicas, imagen, codigo]);
                res.json({ message: 'Se modificó el producto' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al actualizar producto', error });
            }
        });
    }
    // Método para borrar un producto
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { codigo } = req.params;
                const query = 'DELETE FROM producto WHERE codigo = $1';
                yield database_1.default.query(query, [codigo]);
                res.json({ message: 'Se eliminó el producto' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al eliminar producto', error });
            }
        });
    }
    // Método para buscar un producto por código
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { codigo } = req.params;
                const query = 'SELECT * FROM producto WHERE codigo = $1';
                const producto = yield database_1.default.query(query, [codigo]);
                if (producto.rows.length > 0) {
                    return res.json(producto.rows[0]);
                }
                res.status(404).json({ message: 'No existe el producto' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al buscar producto', error });
            }
        });
    }
}
const productoController = new ProductoController(); //devuelve un objeto
exports.default = productoController; //importando la instancia
