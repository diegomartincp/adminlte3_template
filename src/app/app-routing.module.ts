import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRooutingModule } from './auth/auth-roouting.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  //{ path: '**',   redirectTo: '', pathMatch: 'full' }, //Si pones otra cosa
  { path: '',   redirectTo: 'login', pathMatch: 'full' }, //Si no pones nada
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule, //importamos
    AuthRooutingModule, //importamos

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
