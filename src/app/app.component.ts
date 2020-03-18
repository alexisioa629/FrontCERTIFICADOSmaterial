import { Component } from '@angular/core';
import{ ModeloLogin } from './modelos/modelo-login';
import {ServiciosService} from './servicios/servicios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public datosLogin: ServiciosService){
    this.datosLogin.getLogin
  }
  
  //arrayDatosLogin: ModeloLogin[]= []

 
}
