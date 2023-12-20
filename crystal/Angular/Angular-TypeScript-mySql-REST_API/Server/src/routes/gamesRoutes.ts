import { Router }  from 'express';  // cuando nos salga algun error en estos paquetes intalamos npm i @type/'nombre del'
import morgan from 'morgan';
import cors from 'cors';

class GamesRoutes{
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('games'))
    }
}


const gamesRouters = new GamesRoutes();
export default gamesRouters.router;