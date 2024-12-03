import { Component, HostBinding, OnInit } from '@angular/core';
import { AudiempleadoService } from '../../servicios/audiempleado.service';

@Component({
  selector: 'app-audiempleado-list',
  templateUrl: './audiempleado-list.component.html',
  styleUrl: './audiempleado-list.component.css'
})
export class AudiempleadoListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  audiempleados : any = [];
  constructor(private audiempleadoService: AudiempleadoService){}
  ngOnInit(): void {
    this.obtenerAudiempleados();
  }

  
  obtenerAudiempleados(){
    this.audiempleadoService.getAudiempleados().subscribe(
      res => {
        this.audiempleados = res;
      },
      err => console.error(err)
    );
  }

  borrarAudiempleado(id: string){
    this.audiempleadoService.deleteAudiempleado(id).subscribe(
      res => {
        console.log(res);
        this.obtenerAudiempleados();
      },
      err => console.error(err)
    );

  }

}
