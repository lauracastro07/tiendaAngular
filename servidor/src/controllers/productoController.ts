import { Request, Response, text } from "express";
import pool from "../database";

class ProductoController{
    // Método para listar los productos
  public async lista(req: Request, res: Response): Promise<void> {
    try {
      const productos = await pool.query('SELECT * FROM producto');
      res.json(productos.rows); // En PostgreSQL los resultados están en `rows`
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener productos', error });
    }
  }

  // Método para crear un nuevo producto
  public async crear(req: Request, res: Response): Promise<void> {
    try {
      const { codigo,nombre, precio, cantidad, caracteristicas, imagen } = req.body;
      const query = 'INSERT INTO producto (codigo, nombre, precio, cantidad, caracteristicas, imagen) VALUES ($1, $2, $3, $4, $5, $6)';
      await pool.query(query, [codigo, nombre, precio, cantidad, caracteristicas, imagen]);
      res.json({ message: 'Se guardó un producto' });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear producto', error });
    }
  }

  // Método para actualizar un producto
  public async actualiza(req: Request, res: Response): Promise<void> {
    try {
      const { codigo } = req.params;
      const { nombre, precio, cantidad, caracteristicas, imagen } = req.body;
      const query = 'UPDATE producto SET nombre = $1, precio = $2, cantidad = $3, caracteristicas = $4, imagen = $5 WHERE codigo = $6';
      await pool.query(query, [nombre, precio, cantidad, caracteristicas, imagen, codigo]);
      res.json({ message: 'Se modificó el producto' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar producto', error });
    }
  }

  // Método para borrar un producto
  public async borrar(req: Request, res: Response): Promise<void> {
    try {
      const { codigo } = req.params;
      const query = 'DELETE FROM producto WHERE codigo = $1';
      await pool.query(query, [codigo]);
      res.json({ message: 'Se eliminó el producto' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar producto', error });
    }
  }

  // Método para buscar un producto por código
  public async buscar(req: Request, res: Response): Promise<void> {
    try {
      const { codigo } = req.params;
      const query = 'SELECT * FROM producto WHERE codigo = $1';
      const producto = await pool.query(query, [codigo]);
      
      if (producto.rows.length > 0) {
        return res.json(producto.rows[0]);
      }
      
      res.status(404).json({ message: 'No existe el producto' });
    } catch (error) {
      res.status(500).json({ message: 'Error al buscar producto', error });
    }
  }
}

const productoController = new ProductoController(); //devuelve un objeto
export default productoController; //importando la instancia