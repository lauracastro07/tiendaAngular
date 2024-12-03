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
class EmpleadoController {
    // Método para listar 
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empleados = yield database_1.default.query('SELECT * FROM empleado');
                res.json(empleados.rows); // En PostgreSQL los resultados están en `rows`
            }
            catch (error) {
                res.status(500).json({ message: 'Error al obtener empleado', error });
            }
        });
    }
    // Método para crear un nuevo 
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { numempleado, nombre, paterno, materno, celular, cargo, sexo } = req.body;
                const query = 'INSERT INTO empleado (numempleado, nombre, paterno, materno, celular, cargo, sexo) VALUES ($1, $2, $3, $4, $5, $6, $7)';
                yield database_1.default.query(query, [numempleado, nombre, paterno, materno, celular, cargo, sexo]);
                res.json({ message: 'Se guardó un empleado' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al crear empleado', error });
            }
        });
    }
    // Método para actualizar 
    actualiza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { numempleado } = req.params;
                const { nombre, paterno, materno, celular, cargo, sexo } = req.body;
                const query = 'UPDATE empleado SET nombre = $1, paterno = $2, materno = $3, celular = $4, cargo = $5, sexo = $6 WHERE numempleado = $7';
                yield database_1.default.query(query, [nombre, paterno, materno, celular, cargo, sexo, numempleado]);
                res.json({ message: 'Se modificó el empleado' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al actualizar empleado', error });
            }
        });
    }
    // Método para borrar
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { numempleado } = req.params;
                const query = 'DELETE FROM empleado WHERE numempleado = $1';
                yield database_1.default.query(query, [numempleado]);
                res.json({ message: 'Se eliminó el empleado' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al eliminar empleado', error });
            }
        });
    }
    // Método para buscar 
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { numempleado } = req.params;
                const query = 'SELECT * FROM empleado WHERE numempleado = $1';
                const empleado = yield database_1.default.query(query, [numempleado]);
                if (empleado.rows.length > 0) {
                    return res.json(empleado.rows[0]);
                }
                res.status(404).json({ message: 'No existe el empleado' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al buscar empleado', error });
            }
        });
    }
}
const empleadoController = new EmpleadoController(); //devuelve un objeto
exports.default = empleadoController; //importando la instancia
