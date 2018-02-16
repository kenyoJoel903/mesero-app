import { Tienda } from './../_model/tienda';
import { TiendasResponse } from './../_model/response/response.tiendas';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../_model/cliente';
import { URLS } from './var.constant';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TiendaService {

  tiendasCambio = new Subject<TiendasResponse>();

  private url: string = URLS.base + URLS.tienda;

  constructor(private http: HttpClient) { }

  private getHeaders(){
    let access_token = JSON.parse(sessionStorage.getItem("access_token")).access_token;
    let headers = new HttpHeaders().set('Authorization', `bearer ${access_token}`).set('Content-Type', 'application/json');
    return headers;
  }

  getTiendas(){
    return this.http.get<TiendasResponse>(`${this.url}`,{
      headers: this.getHeaders()
    });
  }

  agregarTienda(tienda:Tienda){
    return this.http.post<Tienda>(`${this.url}`, tienda._tienda(),{
      headers: this.getHeaders()
    });
  }

  updateTienda(tienda:Tienda){
    this.http.put<Tienda>(`${this.url}/${tienda.resourceId}`, tienda._tienda(),{
      headers: this.getHeaders()
    }).subscribe(data=>{
      this.getTiendas().subscribe(response=>{
        this.tiendasCambio.next(response);
      })
    })
  }

  getTienda(tienda:number){
    return this.http.get<Tienda>(`${this.url}/${tienda}`,{
      headers: this.getHeaders()
    });
  }

}
