import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AudiempleadoService {
  API_URI = 'http://localhost:3000/app';
  constructor(private http:HttpClient) { }
  getAudiempleados(){
    return this.http.get(`${this.API_URI}/audiempleados`);
  }

  getAudiempleado(id: string){
    return this.http.get(`${this.API_URI}/audiempleados/${id}`);
  }

  deleteAudiempleado(id: string){
    return this.http.delete(`${this.API_URI}/audiempleados/${id}`);
  }
  
}
