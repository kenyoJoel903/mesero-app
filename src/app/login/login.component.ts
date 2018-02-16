import { LoginService } from './../_service/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  

  mensaje: string; 

  constructor(private router:Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  iniciarSesion(form: NgForm){
    //console.log(form);
    let nombre_usuario = form.value.usuario;
    let contrasena = form.value.clave;
    this.loginService.login(nombre_usuario, contrasena).subscribe((data: string) => {
            
      //sessionStorage.setItem("flagUser", data);
      console.log(data);
      let token = JSON.stringify(data);
      sessionStorage.setItem("access_token", token);

      /*if(+data === 1){
        this.router.navigate(['plato']);
      }else{
        this.mensaje = "Usuario o clave incorrecto";
      }*/

      if(data){                
        this.router.navigate(['plato']);
      }      
    }, err => {
      console.log(err);
      this.mensaje = "Credenciales incorrectas";
    });    
  }


}
