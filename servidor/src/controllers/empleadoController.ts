import { Request, Response, text } from "express";
import pool from "../database";

class EmpleadoController{
    public async lista(req: Request,res:Response){
        const empleado = await pool.query('select * from empleado');
        res.json(empleado);
    }

    public async crear(req: Request,res:Response){
        //console.log(req.body); Mostrar en consola
        await pool.query('insert into empleado set ?', [req.body]);
        res.json({message: 'Se guardo un empleado'});
    }

    public async actualiza(req: Request, res: Response){
        const {numEmpleado} = req.params;
        await pool.query('update empleado set ? where numEmpleado = ?', [req.body,numEmpleado]);
        res.json({message: 'Se modifico el empleado'});
    }

    public async borrar(req: Request, res: Response){
        const {numEmpleado} = req.params;
        await pool.query('delete from empleado where numEmpleado = ?', [numEmpleado]);
        res.json({message: 'Se elimino el empleado'});
    }

    public async buscar(req: Request, res: Response){
        const {numEmpleado} = req.params;
        const empleado = await pool.query('select * from empleado where numEmpleado = ?', [numEmpleado]);
        if(empleado.length > 0){
            return res.json(empleado[0])
        }
        res.status(404).json({message: 'no existe el empleado'});
    }
}

const empleadoController = new EmpleadoController(); //devuelve un objeto
export default empleadoController; //importando la instancia