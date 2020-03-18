import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CertificadoComponent } from './certificado/certificado.component';
import { BuscarCertificadoComponent } from './buscar-certificado/buscar-certificado.component';
//imporar modulo de servicios
import { HttpClientModule } from '@angular/common/http';
//
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    CertificadoComponent,
    BuscarCertificadoComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule  
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
