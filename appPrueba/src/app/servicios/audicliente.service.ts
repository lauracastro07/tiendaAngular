import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Audicliente } from '../modelos/Audicliente';

@Injectable({
  providedIn: 'root'
})
export class AudiclienteService {
  API_URI = 'http://localhost:3000/app';
  constructor(private http:HttpClient) { }
  getAudiclientes(){
    return this.http.get(`${this.API_URI}/audiclientes`);
  }

  getAudicliente(id: string){
    return this.http.get(`${this.API_URI}/audiclientes/${id}`);
  }

  deleteAudicliente(id: string){
    return this.http.delete(`${this.API_URI}/audiclientes/${id}`);
  }

}

