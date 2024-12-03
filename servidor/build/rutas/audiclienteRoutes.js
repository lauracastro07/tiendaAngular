"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const audiclienteController_1 = __importDefault(require("../controllers/audiclienteController"));
class AudiclienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', audiclienteController_1.default.lista);
        this.router.get('/:id', audiclienteController_1.default.buscar);
        this.router.delete('/:id', audiclienteController_1.default.borrar);
    }
}
const audiclienteRoutes = new AudiclienteRoutes();
exports.default = audiclienteRoutes.router;
