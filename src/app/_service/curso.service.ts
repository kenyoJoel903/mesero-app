import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as decode from 'jwt-decode';
import { HOST } from './var.constant';

interface CursoResponse {
    nombre: string
    urlCover: string
}

@Injectable()
export class CursoService {
    //private url: string = 'http://localhost:9090';    

    constructor(private http: HttpClient) {
    }

    listar() {
        let access_token = JSON.parse(sessionStorage.getItem("access_token")).access_token;
        let decoded = decode(access_token);
        //console.log(decoded);
        let usuario = decoded.user_name;

        let body = JSON.stringify(`${usuario}`);

        return this.http.post<CursoResponse[]>(`${HOST}/curso/listar`, body, {
            headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`).set('Content-Type', 'application/json')
        });
    }

}