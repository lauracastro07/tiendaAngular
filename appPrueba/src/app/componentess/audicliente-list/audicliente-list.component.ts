import { Component, OnInit,HostBinding } from '@angular/core';
import { AudiclienteService } from '../../servicios/audicliente.service';
@Component({
  selector: 'app-audicliente-list',
  templateUrl: './audicliente-list.component.html',
  styleUrl: './audicliente-list.component.css'
})
export class AudiclienteListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  audiclientes : any = [];
  constructor(private audiclienteService: AudiclienteService){}
  ngOnInit(): void {
    this.obtenerAudiclientes();
  }

  obtenerAudiclientes(){
    this.audiclienteService.getAudiclientes().subscribe(
      res => {
        this.audiclientes = res;
      },
      err => console.error(err)
    );
  }

  borrarAudicliente(id: string){
    this.audiclienteService.deleteAudicliente(id).subscribe(
      res => {
        console.log(res);
        this.obtenerAudiclientes();
      },
      err => console.error(err)
    );

    
  }

}
