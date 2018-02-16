import { Consumo } from './../_model/consumo';
import { ConsultaService } from './../_service/consulta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  
  pedidos: Consumo[];
  

  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {
  }

  obtenerFecha(event){
    //console.log(event);
    this.buscar(event);
  }

  buscar(fechas: Date[]) {
    //console.log(fecha);
    //this.pedidos = this.consultaService.getPedidos(fecha);
    let _fecha1 = "";
    let _fecha2 = "";
    let cantidad = fechas.length;
    let tipoRango = "M";
    
    if(cantidad === 1){
      tipoRango = "U";
      fechas[1] = fechas[0]; //instancia      
      _fecha1 = this.transformDate(fechas[0]) + " 00:00:00";
      _fecha2 = this.transformDate(fechas[1]) + " 23:59:59";     
    }else{
      _fecha1 = this.transformDate(fechas[0]) + " 00:00:00";
      _fecha2 = this.transformDate(fechas[1]) + " 23:59:59";
    }

    let _pedidos:Array<Consumo> = [];

    this.consultaService.getPedidos(_fecha1, _fecha2).subscribe(data=>{
      _pedidos = data._embedded.consumoes;
      if(_pedidos.length == 0){
        this.pedidos = _pedidos;
      }else{
        let cont = 0;
        _pedidos.forEach(pedido =>{
          this.consultaService.getPedidoCliente(pedido._links.cliente.href).subscribe(data=>{
            pedido.cliente = data;
            cont++;
            if(cont == _pedidos.length){
              this.pedidos = _pedidos;
              console.log(this.pedidos);
            }
          });
        });
      }
      
        
      
    });


    

    

    
  }

  cambio(event){  
    this.pedidos = [];
  }

  private transformDate(date:Date){
    let month = date.getMonth() + 1;
    return `${date.getFullYear()}/${month}/${date.getDate()}`;
}

}

