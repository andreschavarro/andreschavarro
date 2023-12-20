"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // cuando nos salga algun error en estos paquetes intalamos npm i @type/'nombre del'
class GamesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('games'));
    }
}
const gamesRouters = new GamesRoutes();
exports.default = gamesRouters.router;
