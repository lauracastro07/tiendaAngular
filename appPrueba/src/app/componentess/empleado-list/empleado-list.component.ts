import { Component, HostBinding, OnInit } from '@angular/core';
import { EmpleadoService } from '../../servicios/empleado.service';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrl: './empleado-list.component.css'
})
export class EmpleadoListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  empleados : any = [];
  constructor(private empleadoService: EmpleadoService){}
  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  
  obtenerEmpleados(){
    this.empleadoService.getEmpleados().subscribe(
      res => {
        this.empleados = res;
      },
      err => console.error(err)
    );
  }

  borrarEmpleado(numempleado: string){
    this.empleadoService.deleteEmpleado(numempleado).subscribe(
      res => {
        console.log(res);
        this.obtenerEmpleados();
      },
      err => console.error(err)
    );

  }

}
