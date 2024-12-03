import { Router } from "express";

import audiempleadoController from "../controllers/audiempleadoController";

class AudiempleadoRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', audiempleadoController.lista);
        this.router.get('/:id', audiempleadoController.buscar)
        this.router.delete('/:id', audiempleadoController.borrar );;
    }
}

const audiempleadoRoutes = new AudiempleadoRoutes();
export default audiempleadoRoutes.router;