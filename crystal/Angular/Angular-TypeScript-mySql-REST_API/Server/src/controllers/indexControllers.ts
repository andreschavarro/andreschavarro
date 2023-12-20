import { Request, Response} from 'express';

class IndexController  {

    public index (req: Request, res: Response) {
         res.send('holaaaaa mor')
    }

}


export const indexController =  new IndexController();