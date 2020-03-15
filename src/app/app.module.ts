import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagPrincipalComponent } from './pag-principal/pag-principal.component';
//importacion de animaciones de material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//importar componentes que necesite
import {MatButtonModule} from '@angular/material/button';// importar un boton
import {MatToolbarModule} from '@angular/material/toolbar';// importar una toolBar
import {MatIconModule} from '@angular/material/icon';// importar iconos
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    PagPrincipalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
