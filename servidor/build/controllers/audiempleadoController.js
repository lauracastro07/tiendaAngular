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
class AudiempleadoController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const audiempleados = yield database_1.default.query('SELECT * FROM audiempleado');
                res.json(audiempleados.rows); // En PostgreSQL los resultados están en `rows`
            }
            catch (error) {
                res.status(500).json({ message: 'Error al obtener registro', error });
            }
        });
    }
    // Método para borrar
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const query = 'DELETE FROM audiempleado WHERE id = $1';
                yield database_1.default.query(query, [id]);
                res.json({ message: 'Se eliminó el registro' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al eliminar registro', error });
            }
        });
    }
    // Método para buscar 
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const query = 'SELECT * FROM audiempleado WHERE id = $1';
                const audiempleado = yield database_1.default.query(query, [id]);
                if (audiempleado.rows.length > 0) {
                    return res.json(audiempleado.rows[0]);
                }
                res.status(404).json({ message: 'No existe el registro' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al buscar registro', error });
            }
        });
    }
}
const audiempleadoController = new AudiempleadoController(); //devuelve un objeto
exports.default = audiempleadoController; //importando la instancia
