import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagPrincipalComponent } from './pag-principal/pag-principal.component';


const routes: Routes = [
  {path:"",redirectTo:"PAGINAPRINCIPAL",pathMatch:"full"},
  {path:"PAGINAPRINCIPAL",component:PagPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
