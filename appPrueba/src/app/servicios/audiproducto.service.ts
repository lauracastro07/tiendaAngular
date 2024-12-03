import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AudiproductoService {
//crear una propiedad donde este la ruta
API_URI = 'http://localhost:3000/app';

//hacer una instancia para poder ocupar la propiedad http


constructor(private http: HttpClient) { }
getAudiproductos(){
  return this.http.get(`${this.API_URI}/audiproductos`);
}

getAudiproducto(id: string){
  return this.http.get(`${this.API_URI}/audiproductos/${id}`);
}

deleteAudiproducto(id: string){
  return this.http.delete(`${this.API_URI}/audiproductos/${id}`);
}
  
}
