import { Component, HostBinding, OnInit } from '@angular/core';
import { Producto } from '../../modelos/Producto';
import { ProductoService } from '../../servicios/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.css'
})
export class ProductoFormComponent implements OnInit{
  @HostBinding('class') classes = 'row';

  producto: Producto = {
    codigo: 0,
    nombre: '',
    precio: {},
    cantidad: 0,
    caracteristicas: '',
    imagen: ''
  };

  edit: boolean = false;

  constructor(private productoService: ProductoService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit(): void {
    const params = this.activateRoute.snapshot.params;
    if (params['codigo']){
      this.productoService.getProducto(params['codigo']).subscribe(
        res => {
          console.log(res);
          this.producto = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  addProducto(){
     this.productoService.createProducto(this.producto).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['productos']);
      },
      err => console.error(err)
     );
  }

  actualizaProducto(){
    const params = this.activateRoute.snapshot.params;
    this.productoService.updateProducto(params['codigo'], this.producto).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/productos']);
      },
      err => console.error(err)
    );

  }

}
