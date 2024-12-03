import { Request, Response, text } from "express";
import pool from "../database";

class AudiempleadoController{
    public async lista(req: Request, res: Response): Promise<void> {
        try {
          const audiempleados = await pool.query('SELECT * FROM audiempleado');
          res.json(audiempleados.rows); // En PostgreSQL los resultados están en `rows`
        } catch (error) {
          res.status(500).json({ message: 'Error al obtener registro', error });
        }
      }
    
      // Método para borrar
      public async borrar(req: Request, res: Response): Promise<void> {
        try {
          const { id } = req.params;
          const query = 'DELETE FROM audiempleado WHERE id = $1';
          await pool.query(query, [id]);
          res.json({ message: 'Se eliminó el registro' });
        } catch (error) {
          res.status(500).json({ message: 'Error al eliminar registro', error });
        }
      }
    
      // Método para buscar 
      public async buscar(req: Request, res: Response): Promise<void> {
        try {
          const { id } = req.params;
          const query = 'SELECT * FROM audiempleado WHERE id = $1';
          const audiempleado = await pool.query(query, [id]);
          
          if (audiempleado.rows.length > 0) {
            return res.json(audiempleado.rows[0]);
          }
          
          res.status(404).json({ message: 'No existe el registro' });
        } catch (error) {
          res.status(500).json({ message: 'Error al buscar registro', error });
        }
      }
}

const audiempleadoController = new AudiempleadoController(); //devuelve un objeto
export default audiempleadoController; //importando la instancia