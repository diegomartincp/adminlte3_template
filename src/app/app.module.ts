import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { PagesComponent } from './pages/pages.component';
//import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    //PagesComponent,
    //DashboardComponent,
    NopageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //Para routing
    AuthModule,  //importar AuthModule
    PagesModule //importar PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
