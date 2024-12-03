import { Request, Response, text } from "express";
import pool from "../database";

class AudiclienteController{
     // Método para listar clientes
  public async lista(req: Request, res: Response): Promise<void> {
    try {
      const audicliente = await pool.query('SELECT * FROM audicliente');
      res.json(audicliente.rows); // En PostgreSQL los resultados están en `rows`
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener auditoria de clientes', error });
    }
  }


  // Método para borrar un cliente
  public async borrar(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const query = 'DELETE FROM audicliente WHERE id = $1';
      await pool.query(query, [id]);
      res.json({ message: 'Se eliminó el registro' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar registro', error });
    }
  }

  // Método para buscar un cliente por RFC
  public async buscar(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const query = 'SELECT * FROM audicliente WHERE id = $1';
      const audicliente = await pool.query(query, [id]);

      if (audicliente.rows.length > 0) {
        return res.json(audicliente.rows[0]);
      }

      res.status(404).json({ message: 'No existe el registro' });
    } catch (error) {
      res.status(500).json({ message: 'Error al buscar registro', error });
    }
  }
}

const audiclienteController = new AudiclienteController(); //devuelve un objeto
export default audiclienteController ; //importando la instancia