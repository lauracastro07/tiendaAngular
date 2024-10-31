import { Component, HostBinding, OnInit } from '@angular/core';
import { Empleado } from '../../modelos/Empleado';
import { EmpleadoService } from '../../servicios/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrl: './empleado-form.component.css'
})
export class EmpleadoFormComponent implements OnInit{

  @HostBinding('class')classes = 'row';
  empleado: Empleado = {
    numEmpleado: 0,
    nombre: '', 
    paterno: '', 
    materno: '', 
    celular: 0,
    cargo: '',
    sexo: ''
  };

  
  edit: boolean = false;

  constructor(private empleadoService: EmpleadoService, private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params ['numEmpleado']){
      this.empleadoService.getEmpleado(params['numEmpleado']).subscribe(
        res => {
          console.log(res);
          this.empleado = res;
          this.edit = true;
        },
        err => console.error(err)
      
      );
    }
  }

  addEmpleado(){
    this.empleadoService.createEmpleado(this.empleado).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['empleados']);
      },
      err => console.error(err)
     );
  }

  actualizaEmpleado(){
    const params = this.activatedRoute.snapshot.params;
    this.empleadoService.updateEmpleado(params['numEmpleado'], this.empleado).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/empleados']);
      },
      err => console.error(err)
     
    );

  }

}
