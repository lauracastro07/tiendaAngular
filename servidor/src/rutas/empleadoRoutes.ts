import { Router } from "express";

import empleadoController from "../controllers/empleadoController";

class EmpleadoRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', empleadoController.lista);
        this.router.post('/', empleadoController.crear);
        this.router.put('/:numempleado', empleadoController.actualiza );
        this.router.delete('/:numempleado', empleadoController.borrar );
        this.router.get('/:numempleado', empleadoController.buscar);
    }
}

const empleadoRoutes = new EmpleadoRoutes();
export default empleadoRoutes.router;