"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteController_1 = __importDefault(require("../controllers/clienteController"));
class ClienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', clienteController_1.default.lista);
        this.router.post('/', clienteController_1.default.crear);
        this.router.put('/:rfc', clienteController_1.default.actualiza);
        this.router.delete('/:rfc', clienteController_1.default.borrar);
        this.router.get('/:rfc', clienteController_1.default.buscar);
    }
}
const clienteRoutes = new ClienteRoutes();
exports.default = clienteRoutes.router;
