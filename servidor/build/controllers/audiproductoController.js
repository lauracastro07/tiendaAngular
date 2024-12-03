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
class AudiproductoController {
    // Método para listar los productos
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const audiproductos = yield database_1.default.query('SELECT * FROM audiproducto');
                res.json(audiproductos.rows); // En PostgreSQL los resultados están en `rows`
            }
            catch (error) {
                res.status(500).json({ message: 'Error al obtener registros', error });
            }
        });
    }
    // Método para borrar un producto
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const query = 'DELETE FROM audiproducto WHERE id = $1';
                yield database_1.default.query(query, [id]);
                res.json({ message: 'Se eliminó el registro' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al eliminar registro', error });
            }
        });
    }
    // Método para buscar un producto por código
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const query = 'SELECT * FROM audiproducto WHERE id = $1';
                const audiproducto = yield database_1.default.query(query, [id]);
                if (audiproducto.rows.length > 0) {
                    return res.json(audiproducto.rows[0]);
                }
                res.status(404).json({ message: 'No existe el registro' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al buscar registro', error });
            }
        });
    }
}
const audiproductoController = new AudiproductoController(); //devuelve un objeto
exports.default = audiproductoController; //importando la instancia
