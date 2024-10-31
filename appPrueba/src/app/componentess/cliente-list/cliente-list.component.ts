import { Component, HostBinding, OnInit } from '@angular/core';
import { ClienteService } from '../../servicios/cliente.service';
@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.css'
})
export class ClienteListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  clientes : any = [];
  constructor(private clienteService: ClienteService){}
  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(){
    this.clienteService.getClientes().subscribe(
      res => {
        this.clientes = res;
      },
      err => console.error(err)
    );
  }

  borrarCliente(rfc: string){
    this.clienteService.deleteCliente(rfc).subscribe(
      res => {
        console.log(res);
        this.obtenerClientes();
      },
      err => console.error(err)
    );

    
  }

}
