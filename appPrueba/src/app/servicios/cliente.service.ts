import { Injectable } from '@angular/core';
import { Cliente } from '../modelos/Cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  API_URI = 'http://localhost:3000/app';
  constructor(private http:HttpClient) { }
  getClientes(){
    return this.http.get(`${this.API_URI}/clientes`);
  }

  getCliente(rfc: string){
    return this.http.get(`${this.API_URI}/clientes/${rfc}`);
  }

  createCliente(cliente: Cliente){
    return this.http.post(`${this.API_URI}/clientes`,cliente);
  }

  deleteCliente(rfc: string){
    return this.http.delete(`${this.API_URI}/clientes/${rfc}`);
  }

  updateCliente(rfc: string, updateCliente: Cliente): Observable<Cliente>{
    return this.http.put(`${this.API_URI}/clientes/${rfc}`, updateCliente);
  }

}
