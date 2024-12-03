"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const audiempleadoController_1 = __importDefault(require("../controllers/audiempleadoController"));
class AudiempleadoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', audiempleadoController_1.default.lista);
        this.router.get('/:id', audiempleadoController_1.default.buscar);
        this.router.delete('/:id', audiempleadoController_1.default.borrar);
        ;
    }
}
const audiempleadoRoutes = new AudiempleadoRoutes();
exports.default = audiempleadoRoutes.router;
