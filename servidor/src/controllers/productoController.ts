import { Request, Response, text } from "express";
import pool from "../database";

class ProductoController{
    public async lista(req: Request,res:Response){
        const producto = await pool.query('select * from producto');
        res.json(producto);
    }

    public async crear(req: Request,res:Response){
        //console.log(req.body); Mostrar en consola
        await pool.query('insert into producto set ?', [req.body]);
        res.json({message: 'Se guardo un producto'});
    }

    public async actualiza(req: Request, res: Response){
        const {codigo} = req.params;
        await pool.query('update producto set ? where codigo = ?', [req.body,codigo]);
        res.json({message: 'Se modifico el producto'});
    }

    public async borrar(req: Request, res: Response){
        const {codigo} = req.params;
        await pool.query('delete from producto where codigo = ?', [codigo]);
        res.json({message: 'Se elimino el producto'});
    }

    public async buscar(req: Request, res: Response){
        const {codigo} = req.params;
        const producto = await pool.query('select * from producto where codigo = ?', [codigo]);
        if(producto.length > 0){
            return res.json(producto[0])
        }
        res.status(404).json({message: 'no existe el producto'});
    }
}

const productoController = new ProductoController(); //devuelve un objeto
export default productoController; //importando la instancia