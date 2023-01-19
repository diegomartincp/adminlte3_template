import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";  //Importamos HttpClient para la llamada a la api
import { Observable, throwError } from 'rxjs';  //Los observables de las peticiones asíncronas

@Injectable({
  providedIn: 'root'
})
export class PingService {

  constructor(private http: HttpClient) { }

  //Un observable hace llamadas asíncronas
//método para llamadas asíncronas dentro de la clase
public getDataFromApi() : Observable<Object>{
  return this.http.get('https://dynamodb.us-west-1.amazonaws.com/ping',{responseType: 'text'}) //Responsetipe nos permite devolver texto plano
  }
}
