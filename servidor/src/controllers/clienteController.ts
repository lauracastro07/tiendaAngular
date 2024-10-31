import { Request, Response, text } from "express";
import pool from "../database";

class ClienteController{
    public async lista(req: Request,res:Response){
        const cliente = await pool.query('select * from cliente');
        res.json(cliente);
    }

    public async crear(req: Request,res:Response){
        //console.log(req.body); Mostrar en consola
        await pool.query('insert into cliente set ?', [req.body]);
        res.json({message: 'Se guardo un cliente'});
    }

    public async actualiza(req: Request, res: Response){
        const {rfc} = req.params;
        await pool.query('update cliente set ? where rfc = ?', [req.body,rfc]);
        res.json({message: 'Se modifico el cliente'});
    }

    public async borrar(req: Request, res: Response){
        const {rfc} = req.params;
        await pool.query('delete from cliente where rfc = ?', [rfc]);
        res.json({message: 'Se elimino el cliente'});
    }

    public async buscar(req: Request, res: Response){
        const {rfc} = req.params;
        const cliente = await pool.query('select * from cliente where rfc = ?', [rfc]);
        if(cliente.length > 0){
            return res.json(cliente[0])
        }
        res.status(404).json({message: 'no existe el cliente'});
    }
}

const clienteController = new ClienteController(); //devuelve un objeto
export default clienteController; //importando la instancia
