import { Router } from "express";

import audiclienteController from "../controllers/audiclienteController";

class AudiclienteRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', audiclienteController.lista);
        this.router.get('/:id', audiclienteController.buscar);
        this.router.delete('/:id', audiclienteController.borrar );
    }
}

const audiclienteRoutes = new AudiclienteRoutes();
export default audiclienteRoutes.router;
