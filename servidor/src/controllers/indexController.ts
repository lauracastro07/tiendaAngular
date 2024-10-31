import { Request, Response, text } from "express";

class IndexController{
    public index(req: Request,res: Response){
        res.json({text: 'Puedes acceder a /app/clientes-productos-empleados o cualquier liga que desees'});
    }
}

export const indexController = new IndexController();
