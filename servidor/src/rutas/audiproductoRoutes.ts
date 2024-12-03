import { Router } from "express";
import audiproductoController from "../controllers/audiproductoController";

class AudiproductoRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', audiproductoController.lista);
        this.router.get('/:id', audiproductoController.buscar);
        this.router.delete('/:id', audiproductoController.borrar);
    }
}

const audiproductoRoutes = new AudiproductoRoutes();
export default audiproductoRoutes.router;