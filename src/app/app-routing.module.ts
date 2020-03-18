import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{OpcionesComponent} from './opciones/opciones.component';
import { LoginComponent } from './login/login.component';
import { CertificadoComponent } from './certificado/certificado.component';
import { BuscarCertificadoComponent } from './buscar-certificado/buscar-certificado.component';

const routes: Routes = [
  { path: "buscarcertificado", component: BuscarCertificadoComponent},
  { path: "certificado", component: CertificadoComponent },
  { path: "opciones", component: OpcionesComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
