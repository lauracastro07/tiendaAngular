import { Router } from "express";

import clienteController from "../controllers/clienteController";

class ClienteRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', clienteController.lista);
        this.router.post('/', clienteController.crear);
        this.router.put('/:rfc', clienteController.actualiza );
        this.router.delete('/:rfc', clienteController.borrar );
        this.router.get('/:rfc', clienteController.buscar);
    }
}

const clienteRoutes = new ClienteRoutes();
export default clienteRoutes.router;