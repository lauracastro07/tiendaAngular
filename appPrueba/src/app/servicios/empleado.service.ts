import { Injectable } from '@angular/core';
import { Empleado } from '../modelos/Empleado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  API_URI = 'http://localhost:3000/app';
  constructor(private http:HttpClient) { }
  getEmpleados(){
    return this.http.get(`${this.API_URI}/empleados`);
  }

  getEmpleado(numEmpleado: string){
    return this.http.get(`${this.API_URI}/empleados/${numEmpleado}`);
  }

  createEmpleado(empleado: Empleado){
    return this.http.post(`${this.API_URI}/empleados`,empleado);
  }

  deleteEmpleado(numEmpleado: string){
    return this.http.delete(`${this.API_URI}/empleados/${numEmpleado}`);
  }

  updateEmpleado(numEmpleado: string, updateEmpleado: Empleado): Observable<Empleado>{
    return this.http.put(`${this.API_URI}/empleados/${numEmpleado}`, updateEmpleado);
  }

}