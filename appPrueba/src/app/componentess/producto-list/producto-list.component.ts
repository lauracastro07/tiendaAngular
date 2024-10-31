import { Component, HostBinding, OnInit } from '@angular/core';
//importar el archivo de producto service.ts
import { ProductoService } from '../../servicios/producto.service';
@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent implements OnInit{
//creamos el arreglo llamado productos
//Se importa HostBinding
@HostBinding('class') classes = 'row';
productos: any = [];

  constructor(private productoService: ProductoService){}
  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){

    this.productoService.getProductos().subscribe(
      res => {
        //Llena el arreglo con la respuesta que enviamos
        this.productos = res;
      },
      err => console.error(err)
    );
  }

  borrarProducto(codigo: string){
    this.productoService.deleteProducto(codigo).subscribe(
      res => {
        console.log(res);
        this.obtenerProductos();
      },
      err => console.error(err)
    );

  }
}
