import { Request, Response, text } from "express";
import pool from "../database";

class ClienteController{
    // Método para listar clientes
  public async lista(req: Request, res: Response): Promise<void> {
    try {
      const cliente = await pool.query('SELECT * FROM cliente');
      res.json(cliente.rows); // En PostgreSQL los resultados están en `rows`
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener clientes', error });
    }
  }

  // Método para crear un nuevo cliente
  public async crear(req: Request, res: Response): Promise<void> {
    try {
      const { rfc, codigo, nombre, paterno, materno, edad, sexo, celular, foto } = req.body;
      const query = 'INSERT INTO cliente ( rfc, codigo, nombre, paterno, materno, edad, sexo, celular, foto ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
      await pool.query(query, [rfc, codigo, nombre, paterno, materno, edad, sexo, celular, foto]);
      res.json({ message: 'Se guardó un cliente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear cliente', error });
    }
  }

  // Método para actualizar un cliente
  public async actualiza(req: Request, res: Response): Promise<void> {
    try {
      const { rfc } = req.params;
      const { codigo, nombre, paterno, materno, edad, sexo, celular, foto } = req.body;
      const query = 'UPDATE cliente SET codigo = $1, nombre = $2, paterno = $3, materno = $4, edad = $5, sexo = $6, celular = $7, foto = $8 WHERE rfc = $9';
      await pool.query(query, [codigo, nombre, paterno, materno, edad, sexo, celular, foto, rfc]);
      res.json({ message: 'Se modificó el cliente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar cliente', error });
    }
  }

  // Método para borrar un cliente
  public async borrar(req: Request, res: Response): Promise<void> {
    try {
      const { rfc } = req.params;
      const query = 'DELETE FROM cliente WHERE rfc = $1';
      await pool.query(query, [rfc]);
      res.json({ message: 'Se eliminó el cliente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar cliente', error });
    }
  }

  // Método para buscar un cliente por RFC
  public async buscar(req: Request, res: Response): Promise<void> {
    try {
      const { rfc } = req.params;
      const query = 'SELECT * FROM cliente WHERE rfc = $1';
      const cliente = await pool.query(query, [rfc]);

      if (cliente.rows.length > 0) {
        return res.json(cliente.rows[0]);
      }

      res.status(404).json({ message: 'No existe el cliente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al buscar cliente', error });
    }
  }
}

const clienteController = new ClienteController(); //devuelve un objeto
export default clienteController; //importando la instancia
