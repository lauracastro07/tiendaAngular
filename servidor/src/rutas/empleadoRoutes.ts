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
        this.router.put('/:numEmpleado', empleadoController.actualiza );
        this.router.delete('/:numEmpleado', empleadoController.borrar );
        this.router.get('/:numEmpleado', empleadoController.buscar);
    }
}

const empleadoRoutes = new EmpleadoRoutes();
export default empleadoRoutes.router;