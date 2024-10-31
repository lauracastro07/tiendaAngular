"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'Puedes acceder a /app/clientes-productos-empleados o cualquier liga que desees' });
    }
}
exports.indexController = new IndexController();
