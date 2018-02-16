import { Consumo } from './../_model/consumo';
import { Plato } from './../_model/plato';
import { Cliente } from './../_model/cliente';
import { DetallesResponse } from './../_model/response/response.detalles';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pedido } from "../_model/pedido";
import { URLS } from './var.constant';
import { ConsumosResponse } from "../_model/response/response.consumos";
import { Detalle } from '../_model/detalle';

@Injectable()
export class ConsultaService{

    private url: string = URLS.base + URLS.consumo

    pedidos: Pedido[] = [];

    constructor(private http: HttpClient){        
    }

    private getHeaders(){
        let access_token = JSON.parse(sessionStorage.getItem("access_token")).access_token;
        let headers = new HttpHeaders().set('Authorization', `bearer ${access_token}`).set('Content-Type', 'application/json');
        return headers;
    }

    getPedidos(fecha1: string, fecha2: string){
        return this.http.get<ConsumosResponse>(`${this.url}/search/findByFechapedidoBetween?fecha1=${fecha1}&fecha2=${fecha2}`,{
            headers: this.getHeaders()
        });
    }

    getPedidoDetalles(urlDetalles:string){
        return  this.http.get<DetallesResponse>(urlDetalles, {
            headers: this.getHeaders()
        });
    }

    getPedidoCliente(urlCliente:string){
        return this.http.get<Cliente>(urlCliente, {
            headers: this.getHeaders()
        });
    }

    getDetallePlato(urlPlato:string){
        return this.http.get<Plato>(urlPlato,{
            headers: this.getHeaders()
        });
    }

}