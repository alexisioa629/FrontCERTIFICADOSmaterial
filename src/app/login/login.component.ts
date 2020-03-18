import { Component, OnInit } from '@angular/core';
import { ModeloLogin } from '../modelos/modelo-login';
import { Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';
import { FormGroup, FormBuilder, Validators, FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validarLogin:ModeloLogin={
    dni:"",
    password:""
  }
  Login:any=[]
  error:string
  form_logeo:FormGroup
  constructor(private router:Router,private servicio:ServiciosService,private form:FormBuilder) {
    this.form_logeo=this.form.group({
      dni:["",Validators.required],
      password:["",Validators.required]
    })
   }
  ngOnInit(): void {
  }
  getLogin(){
    this.servicio.getLogin(this.validarLogin).subscribe(res=>{
      this.Login=res;
      console.log(" esto es lo que trae"+res);
      console.log("esto es lo que trae"+this.Login);
      if(this.Login.mensaje==="Correcto"){
        this.router.navigate(['opciones'])        
      }else{
        this.error="Datos Incorrectos"
      }
    })
  }

}
