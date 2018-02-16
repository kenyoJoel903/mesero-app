import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { URLS } from './var.constant';


@Injectable()
export class LoginService {
    //private url: string = 'http://localhost:3000/usuario';
    private url: string = URLS.base + URLS.login;

    logeado: boolean = false;

    constructor(private http: HttpClient, private router: Router) {
    }

    login(nombre_usuario: string, contrasena: string) {
        let body = `grant_type=password&username=${encodeURIComponent(nombre_usuario)}&password=${encodeURIComponent(contrasena)}`;
        return this.http.post(this.url, body, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .set('Authorization', 'Basic ' + btoa('meseroapp:secret'))
        });
    }

    estaLogeado() {
        let token = sessionStorage.getItem("access_token");
        return token != null ? 1 : 0;
    }

    cerrarSesion() {
        sessionStorage.removeItem("access_token");
        this.router.navigate(['login']);
    }

}