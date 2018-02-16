import { ClientesResponse } from './../_model/response/response.clientes';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../_model/cliente';
import { URLS } from './var.constant';

@Injectable()
export class ClienteService {

  private url: string = URLS.base + URLS.cliente;

  constructor(private http: HttpClient) { }

  private getHeaders(){
    let access_token = JSON.parse(sessionStorage.getItem("access_token")).access_token;
    let headers = new HttpHeaders().set('Authorization', `bearer ${access_token}`).set('Content-Type', 'application/json');
    return headers;
  }

  getClientes(){
    return this.http.get<ClientesResponse>(`${this.url}`,{
      headers: this.getHeaders()
    });
  }

  registrar(nombreCliente: string){
    let cliente: Cliente = new Cliente(0,nombreCliente, '00000000');
    return this.http.post<Cliente>(`${this.url}`, cliente._cliente(),{
      headers: this.getHeaders()
    });
  }
}
