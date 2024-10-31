import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componentess/navigation/navigation.component';
import { ProductoFormComponent } from './componentess/producto-form/producto-form.component';
import { ProductoListComponent } from './componentess/producto-list/producto-list.component';
import { ClienteFormComponent } from './componentess/cliente-form/cliente-form.component';
import { ClienteListComponent } from './componentess/cliente-list/cliente-list.component';
import { EmpleadoFormComponent } from './componentess/empleado-form/empleado-form.component';
import { EmpleadoListComponent } from './componentess/empleado-list/empleado-list.component';
import { InicioComponent } from './componentess/inicio/inicio.component';

import { ProductoService } from './servicios/producto.service';
import { ClienteService } from './servicios/cliente.service';
import { EmpleadoService } from './servicios/empleado.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductoFormComponent,
    ProductoListComponent,
    ClienteFormComponent,
    ClienteListComponent,
    EmpleadoFormComponent,
    EmpleadoListComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [
    ProductoService,
    ClienteService,
    EmpleadoService,
    provideHttpClient(),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
