import { Detalle } from './../_model/detalle';
import { Consumo } from './../_model/consumo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLS } from './var.constant';

@Injectable()
export class ConsumoService{        
    private url: string = URLS.base + URLS.consumo;// 'http://localhost:3000/consumo/registrar';

    constructor(private http: HttpClient){        
    }    


    private getHeaders(){
        let access_token = JSON.parse(sessionStorage.getItem("access_token")).access_token;
        let headers = new HttpHeaders().set('Authorization', `bearer ${access_token}`).set('Content-Type', 'application/json');
        return headers;
    }


    registrar(consumo:Consumo){
        return this.http.post<Consumo>(this.url,consumo._consumo(),{
            headers: this.getHeaders()
        });
    }

    registrarDetalles(consumo:Consumo){
        consumo.detalles.forEach(detalle =>{
            detalle.consumo = consumo;
            this.http.post<Detalle>(URLS.base + URLS.detalle, detalle._detalle(),{
                headers: this.getHeaders()
            }).subscribe(data =>{
                console.log(data);
            })
        });
    }
    
   /* registrar(pedido: any){
        return this.http.post(this.url, pedido);
    }*/
    
}