import { Component, HostBinding, OnInit } from '@angular/core';
import { ClienteService } from '../../servicios/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../modelos/Cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent implements OnInit{
  @HostBinding('class') classes = 'row';

  cliente: Cliente = {
    rfc: '',
    codigo: 0,
    nombre: '',
    paterno: '',
    materno: '',
    edad: 0,
    sexo: '',
    celular: 0,
    foto: ''
  };

  
  edit: boolean = false;
  constructor(private clienteService: ClienteService, private router: Router, private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params ['rfc']){
      this.clienteService.getCliente(params['rfc']).subscribe(
        res => {
          console.log(res);
          this.cliente = res;
          this.edit = true;
        },
        err => console.error(err)
      
      );
    }
  }

  addCliente(){
    this.clienteService.createCliente(this.cliente).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['clientes']);
      },
      err => console.error(err)
     );
  }

  actualizaCliente(){
    const params = this.activatedRoute.snapshot.params;
    this.clienteService.updateCliente(params['rfc'], this.cliente).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/clientes']);
      },
      err => console.error(err)
     
    );
  }
}
