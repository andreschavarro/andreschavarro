import { Request, Response} from 'express';

class GamesController  {

    public index (req: Request, res: Response) {
         res.send('holaaaaa mor desde gfame s')
    }

}


export const gamesController =  new GamesController();