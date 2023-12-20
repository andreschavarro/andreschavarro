"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("../keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
pool.then(connection => {
    connection.release();
    console.log('Conexión exitosa a la base de datos');
}).catch(error => {
    console.error('Error de conexión a la base de datos:', error);
});
exports.default = pool;
