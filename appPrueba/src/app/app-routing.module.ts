import { NgModule } from '@angular/core';
//importacion que permite definir las rutas de la app
import { RouterModule, Routes } from '@angular/router';
//importamos el archiv que viene de la ruta sig
import { ProductoListComponent } from './componentess/producto-list/producto-list.component';
import { ClienteListComponent } from './componentess/cliente-list/cliente-list.component';
import { EmpleadoListComponent } from './componentess/empleado-list/empleado-list.component';
import { InicioComponent } from './componentess/inicio/inicio.component';
import { ProductoFormComponent } from './componentess/producto-form/producto-form.component';
import { ClienteFormComponent } from './componentess/cliente-form/cliente-form.component';
import { EmpleadoFormComponent } from './componentess/empleado-form/empleado-form.component';
import { AudiproductoListComponent } from './componentess/audiproducto-list/audiproducto-list.component';
import { AudiclienteListComponent } from './componentess/audicliente-list/audicliente-list.component';
import { AudiempleadoListComponent } from './componentess/audiempleado-list/audiempleado-list.component';

const routes: Routes = [
  //creamos objetos
  //muestra lo que esta en el archivo producto-list.component.html
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: '',
    redirectTo: '/audiproductos',
    pathMatch: 'full'
  },
  {
    path: 'audiproductos',
    component: AudiproductoListComponent
  },
  {
    path: '',
    redirectTo: '/audiclientes',
    pathMatch: 'full'
  },
  {
    path: 'audiclientes',
    component: AudiclienteListComponent
  },
  {
    path: '',
    redirectTo: '/audiempleados',
    pathMatch: 'full'
  },
  {
    path: 'audiempleados',
    component: AudiempleadoListComponent
  },
  {
    path: '',
    redirectTo: '/productos',
    pathMatch: 'full'
  },
  {
    path:'productos', //Se creo la ruta para abrir un componente
    component: ProductoListComponent
  },
  {
    path: 'productos/agregar',
    component: ProductoFormComponent
  },
  {
    path: 'productos/actualizar/:codigo',
    component: ProductoFormComponent
  },
  {
    path: '',
    redirectTo: '/clientes',
    pathMatch: 'full'
  },
  {
    path:'clientes', //Se creo la ruta para abrir un componente
    component: ClienteListComponent
  },
  {
    path: 'clientes/agregar',
    component: ClienteFormComponent
  },
  {
    path: 'clientes/actualizar/:rfc',
    component: ClienteFormComponent
  },
  {
    path: '',
    redirectTo: '/empleados',
    pathMatch: 'full'
  },
  {
    path:'empleados', //Se creo la ruta para abrir un componente
    component: EmpleadoListComponent
  },
  {
    path: 'empleados/agregar',
    component: EmpleadoFormComponent
  },
  {
    path: 'empleados/actualizar/:numempleado',
    component: EmpleadoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
