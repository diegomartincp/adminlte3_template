import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRooutingModule } from './auth/auth-roouting.module';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' }, //Si no pones nada
  { path: '**',   component: NopageFoundComponent}, //Si pones otra cosa te manda a página no encontrada

];

@NgModule({
  imports: [
    CommonModule, //Importamos
    RouterModule.forRoot(routes),
    PagesRoutingModule, //importamos
    AuthRooutingModule, //importamos

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
