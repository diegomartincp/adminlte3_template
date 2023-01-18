import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; //Importar para usar Routes en la variable como en el resto de módulos de la aplicacion
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { PagesComponent } from './pages.component';

const routes:Routes = [
  { path: 'dashboard', component: PagesComponent,
  //AÑADIR AQUÍ LAS PÁGINAS DEL PROYECTO
  children:[
      { path: 'inicio',   component: InicioComponent },
      //{ path: 'usuarios',   component: DashboardComponent },, //Las páginas de nuestra app
    ]
  } 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) //importamos esto
  ],
  exports:[
    RouterModule  //añadimos esto
  ]
})
export class PagesRoutingModule { }
