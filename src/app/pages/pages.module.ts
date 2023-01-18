import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    DashboardComponent,
    //Aquí poner el resto de páginas de la aplicación
    PagesComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,  //Es importante
    SharedModule  //También hay que importarlo
  ],
  exports:[
    DashboardComponent,
    //Aquí poner el resto de páginas de la aplicación
    PagesComponent
  ]
})
export class PagesModule { }
