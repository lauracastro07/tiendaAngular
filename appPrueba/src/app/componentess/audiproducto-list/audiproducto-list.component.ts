import { Component, HostBinding, OnInit } from '@angular/core';
import { AudiproductoService } from '../../servicios/audiproducto.service';

@Component({
  selector: 'app-audiproducto-list',
  templateUrl: './audiproducto-list.component.html',
  styleUrl: './audiproducto-list.component.css'
})
export class AudiproductoListComponent implements OnInit{
//creamos el arreglo llamado productos
//Se importa HostBinding
@HostBinding('class') classes = 'row';
audiproductos: any = [];

  constructor(private audiproductoService: AudiproductoService){}
  ngOnInit(): void {
    this.obtenerAudiproductos();
  }

  obtenerAudiproductos(){

    this.audiproductoService.getAudiproductos().subscribe(
      res => {
        //Llena el arreglo con la respuesta que enviamos
        this.audiproductos = res;
      },
      err => console.error(err)
    );
  }

  borrarAudiproducto(id: string){
    this.audiproductoService.deleteAudiproducto(id).subscribe(
      res => {
        console.log(res);
        this.obtenerAudiproductos();
      },
      err => console.error(err)
    );

  } 

}
