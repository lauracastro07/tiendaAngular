"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const audiclienteRoutes_1 = __importDefault(require("./rutas/audiclienteRoutes"));
const audiempleadoRoutes_1 = __importDefault(require("./rutas/audiempleadoRoutes"));
const audiproductoRoutes_1 = __importDefault(require("./rutas/audiproductoRoutes"));
const clienteRoutes_1 = __importDefault(require("./rutas/clienteRoutes"));
const productoRoutes_1 = __importDefault(require("./rutas/productoRoutes"));
const empleadoRoutes_1 = __importDefault(require("./rutas/empleadoRoutes"));
const indexRoutes_1 = __importDefault(require("./rutas/indexRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.rutas();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    rutas() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/app/audiclientes', audiclienteRoutes_1.default);
        this.app.use('/app/audiempleados', audiempleadoRoutes_1.default);
        this.app.use('/app/audiproductos', audiproductoRoutes_1.default);
        this.app.use('/app/clientes', clienteRoutes_1.default);
        this.app.use('/app/productos', productoRoutes_1.default);
        this.app.use('/app/empleados', empleadoRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
