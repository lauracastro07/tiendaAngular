"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleadoController_1 = __importDefault(require("../controllers/empleadoController"));
class EmpleadoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', empleadoController_1.default.lista);
        this.router.post('/', empleadoController_1.default.crear);
        this.router.put('/:numEmpleado', empleadoController_1.default.actualiza);
        this.router.delete('/:numEmpleado', empleadoController_1.default.borrar);
        this.router.get('/:numEmpleado', empleadoController_1.default.buscar);
    }
}
const empleadoRoutes = new EmpleadoRoutes();
exports.default = empleadoRoutes.router;
