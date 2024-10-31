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
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empleado = yield database_1.default.query('select * from empleado');
            res.json(empleado);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body); Mostrar en consola
            yield database_1.default.query('insert into empleado set ?', [req.body]);
            res.json({ message: 'Se guardo un empleado' });
        });
    }
    actualiza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numEmpleado } = req.params;
            yield database_1.default.query('update empleado set ? where numEmpleado = ?', [req.body, numEmpleado]);
            res.json({ message: 'Se modifico el empleado' });
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numEmpleado } = req.params;
            yield database_1.default.query('delete from empleado where numEmpleado = ?', [numEmpleado]);
            res.json({ message: 'Se elimino el empleado' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numEmpleado } = req.params;
            const empleado = yield database_1.default.query('select * from empleado where numEmpleado = ?', [numEmpleado]);
            if (empleado.length > 0) {
                return res.json(empleado[0]);
            }
            res.status(404).json({ message: 'no existe el empleado' });
        });
    }
}
const empleadoController = new EmpleadoController(); //devuelve un objeto
exports.default = empleadoController; //importando la instancia