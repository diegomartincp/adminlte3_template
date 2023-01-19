import { Component } from '@angular/core';
import { PingService } from 'src/app/ping.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  
constructor(private ping_service:PingService){} //importar ping service

estado:any = ''
respuesta =''
query:any=""

hacer_ping(){
  this.estado = 'llamando api'

  let startFrom = new Date().getTime(); //Antes de la petición

  this.ping_service.getDataFromApi().subscribe(data => {
    console.log(data)
    this.respuesta=data.toString()
    let delay=new Date().getTime() - startFrom
    this.estado=delay
  });
}

}
