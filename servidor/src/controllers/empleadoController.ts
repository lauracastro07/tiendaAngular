import { Request, Response, text } from "express";
import pool from "../database";

class EmpleadoController{
     // Método para listar 
  public async lista(req: Request, res: Response): Promise<void> {
    try {
      const empleados = await pool.query('SELECT * FROM empleado');
      res.json(empleados.rows); // En PostgreSQL los resultados están en `rows`
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener empleado', error });
    }
  }

  // Método para crear un nuevo 
  public async crear(req: Request, res: Response): Promise<void> {
    try {
      const { numempleado, nombre, paterno, materno, celular, cargo, sexo } = req.body;
      const query = 'INSERT INTO empleado (numempleado, nombre, paterno, materno, celular, cargo, sexo) VALUES ($1, $2, $3, $4, $5, $6, $7)';
      await pool.query(query, [numempleado, nombre, paterno, materno, celular, cargo, sexo]);
      res.json({ message: 'Se guardó un empleado' });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear empleado', error });
    }
  }

  // Método para actualizar 
  public async actualiza(req: Request, res: Response): Promise<void> {
    try {
      const { numempleado } = req.params;
      const { nombre, paterno, materno, celular, cargo, sexo } = req.body;
      const query = 'UPDATE empleado SET nombre = $1, paterno = $2, materno = $3, celular = $4, cargo = $5, sexo = $6 WHERE numempleado = $7';
      await pool.query(query, [nombre, paterno, materno, celular, cargo, sexo, numempleado]);
      res.json({ message: 'Se modificó el empleado' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar empleado', error });
    }
  }

  // Método para borrar
  public async borrar(req: Request, res: Response): Promise<void> {
    try {
      const { numempleado } = req.params;
      const query = 'DELETE FROM empleado WHERE numempleado = $1';
      await pool.query(query, [numempleado]);
      res.json({ message: 'Se eliminó el empleado' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar empleado', error });
    }
  }

  // Método para buscar 
  public async buscar(req: Request, res: Response): Promise<void> {
    try {
      const { numempleado } = req.params;
      const query = 'SELECT * FROM empleado WHERE numempleado = $1';
      const empleado = await pool.query(query, [numempleado]);
      
      if (empleado.rows.length > 0) {
        return res.json(empleado.rows[0]);
      }
      
      res.status(404).json({ message: 'No existe el empleado' });
    } catch (error) {
      res.status(500).json({ message: 'Error al buscar empleado', error });
    }
  }
}

const empleadoController = new EmpleadoController(); //devuelve un objeto
export default empleadoController; //importando la instancia