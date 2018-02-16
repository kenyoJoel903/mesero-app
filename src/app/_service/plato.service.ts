import { Plato } from './../_model/plato';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { URLS } from './var.constant';
import { PlatosResponse } from './../_model/response/response.platos';

@Injectable()
export class PlatoService {
  platosCambio = new Subject<PlatosResponse>();

  private url: string = URLS.base + URLS.plato;

  constructor(private http: HttpClient) { }

  private getHeaders(){
    let access_token = JSON.parse(sessionStorage.getItem("access_token")).access_token;
    let headers = new HttpHeaders().set('Authorization', `bearer ${access_token}`).set('Content-Type', 'application/json');
    return headers;
  }

  getPlatos() {
    let platos:Array<Plato> = [];
    return this.http.get<PlatosResponse>(`${this.url}`, {
      headers: this.getHeaders()
    }) 

  
  }

  getPlato(id: number) {
    return this.http.get<Plato>(`${this.url}/${id}`, {
      headers: this.getHeaders()
    });
  }

  agregarPlato(plato: Plato) {
    return this.http.post(`${this.url}`, plato._plato(),{
      headers: this.getHeaders()
    }).subscribe(data => {     
      this.getPlatos().subscribe(response => {
        this.platosCambio.next(response);
      });
    });
  }

  actualizarPlato(plato: Plato) {
    this.http.put(`${this.url}/${plato.resourceId}`, plato._plato(),{
      headers: this.getHeaders()
      }).subscribe(data => {      
        this.getPlatos().subscribe(response => {
          this.platosCambio.next(response);
        });
    });
  }

  eliminarPlato(plato: Plato) {        
    this.http.delete(`${this.url}/${plato.resourceId}`,{
        headers: this.getHeaders()
      }).subscribe(data => {            
        this.getPlatos().subscribe(response => {
          this.platosCambio.next(response);
        });
      
    });        
}
}
