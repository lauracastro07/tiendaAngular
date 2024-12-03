"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const data_1 = __importDefault(require("./data"));
const pool = new pg_1.Pool({
    host: data_1.default.database.host,
    user: data_1.default.database.user,
    password: data_1.default.database.password,
    database: data_1.default.database.database,
    port: 5432,
});
pool.connect()
    .then((client) => {
    console.log('Conexión exitosa a PostgreSQL');
    client.release();
})
    .catch((err) => {
    console.error('Error al conectar a PostgreSQL:', err);
});
exports.default = pool;
