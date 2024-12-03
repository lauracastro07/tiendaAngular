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
class ClienteController {
    // Método para listar clientes
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cliente = yield database_1.default.query('SELECT * FROM cliente');
                res.json(cliente.rows); // En PostgreSQL los resultados están en `rows`
            }
            catch (error) {
                res.status(500).json({ message: 'Error al obtener clientes', error });
            }
        });
    }
    // Método para crear un nuevo cliente
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { rfc, codigo, nombre, paterno, materno, edad, sexo, celular, foto } = req.body;
                const query = 'INSERT INTO cliente ( rfc, codigo, nombre, paterno, materno, edad, sexo, celular, foto ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
                yield database_1.default.query(query, [rfc, codigo, nombre, paterno, materno, edad, sexo, celular, foto]);
                res.json({ message: 'Se guardó un cliente' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al crear cliente', error });
            }
        });
    }
    // Método para actualizar un cliente
    actualiza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { rfc } = req.params;
                const { codigo, nombre, paterno, materno, edad, sexo, celular, foto } = req.body;
                const query = 'UPDATE cliente SET codigo = $1, nombre = $2, paterno = $3, materno = $4, edad = $5, sexo = $6, celular = $7, foto = $8 WHERE rfc = $9';
                yield database_1.default.query(query, [codigo, nombre, paterno, materno, edad, sexo, celular, foto, rfc]);
                res.json({ message: 'Se modificó el cliente' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al actualizar cliente', error });
            }
        });
    }
    // Método para borrar un cliente
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { rfc } = req.params;
                const query = 'DELETE FROM cliente WHERE rfc = $1';
                yield database_1.default.query(query, [rfc]);
                res.json({ message: 'Se eliminó el cliente' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al eliminar cliente', error });
            }
        });
    }
    // Método para buscar un cliente por RFC
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { rfc } = req.params;
                const query = 'SELECT * FROM cliente WHERE rfc = $1';
                const cliente = yield database_1.default.query(query, [rfc]);
                if (cliente.rows.length > 0) {
                    return res.json(cliente.rows[0]);
                }
                res.status(404).json({ message: 'No existe el cliente' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al buscar cliente', error });
            }
        });
    }
}
const clienteController = new ClienteController(); //devuelve un objeto
exports.default = clienteController; //importando la instancia
