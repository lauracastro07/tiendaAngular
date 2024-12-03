import { Request, Response, text } from "express";
import pool from "../database";

class AudiproductoController{
    // Método para listar los productos
  public async lista(req: Request, res: Response): Promise<void> {
    try {
      const audiproductos = await pool.query('SELECT * FROM audiproducto');
      res.json(audiproductos.rows); // En PostgreSQL los resultados están en `rows`
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener registros', error });
    }
  }

  // Método para borrar un producto
  public async borrar(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const query = 'DELETE FROM audiproducto WHERE id = $1';
      await pool.query(query, [id]);
      res.json({ message: 'Se eliminó el registro' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar registro', error });
    }
  }

  // Método para buscar un producto por código
  public async buscar(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const query = 'SELECT * FROM audiproducto WHERE id = $1';
      const audiproducto = await pool.query(query, [id]);
      
      if (audiproducto.rows.length > 0) {
        return res.json(audiproducto.rows[0]);
      }
      
      res.status(404).json({ message: 'No existe el registro' });
    } catch (error) {
      res.status(500).json({ message: 'Error al buscar registro', error });
    }
  }
}

const audiproductoController = new AudiproductoController(); //devuelve un objeto
export default audiproductoController; //importando la instancia