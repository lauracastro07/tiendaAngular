"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const audiproductoController_1 = __importDefault(require("../controllers/audiproductoController"));
class AudiproductoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', audiproductoController_1.default.lista);
        this.router.get('/:id', audiproductoController_1.default.buscar);
        this.router.delete('/:id', audiproductoController_1.default.borrar);
    }
}
const audiproductoRoutes = new AudiproductoRoutes();
exports.default = audiproductoRoutes.router;
