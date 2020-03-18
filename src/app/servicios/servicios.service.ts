import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  ModeloLogin } from '../modelos/modelo-login';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
// en el constructor creamos un objeto de la clase HttpClient
  constructor(private http: HttpClient) {
    
  }

  heroku="https://certificado-nodejs.herokuapp.com/api/"
  
  //creamos un metodo para 
   getLogin(login:ModeloLogin){
    return this.http.post(`${this.heroku}datos_usuario/getLogin`,login)
  }
}
