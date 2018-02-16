import { Consumo } from './../_model/consumo';
import { ClienteService } from './../_service/cliente.service';
import { Detalle } from './../_model/detalle';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import { Component, OnInit, Input } from '@angular/core';
import { Plato } from '../_model/plato';
import { Cliente } from '../_model/cliente';
import { Pedido } from '../_model/pedido';
import { ConsumoService } from '../_service/consumo.service';
import { PlatoService } from '../_service/plato.service';


@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css']
})
export class ConsumoComponent implements OnInit {

  busqueda: string;
  busquedaCliente: string;
  dataService: CompleterData;
  dataServiceCliente: CompleterData;
  platos: Plato[] = [];
  clientes: Cliente[] = [];
  plato: Plato;
  cantidad: number;
  cliente: Cliente;
  total: number = 0;
  flagMensaje: boolean = false;
  ////////////
  pedido: Pedido;
  detalle: Detalle[] = [];
  consumo:Consumo = null;
  index: number = 0;
  filterQuery = "";
  filterQueryCliente = "";

  constructor(
    private consumoService: ConsumoService,
    private platoService: PlatoService,
    private completerService: CompleterService,
    private clienteService: ClienteService) {

    let obsPlatos = this.platoService.getPlatos();
    obsPlatos.subscribe(data => {
      this.platos = data._embedded.platoes;
      this.dataService = this.completerService.local(this.platos, 'nombre', 'nombre');
    });

    let obsClientes = this.clienteService.getClientes();
    obsClientes.subscribe(data => {
      this.clientes = data._embedded.clientes;
      this.dataServiceCliente = this.completerService.local(this.clientes, 'nombreCompleto,dni', 'nombreCompleto');
    });
  }

  ngOnInit() {
    //this.detalle = this.consumoService.detalle;    
  }

  removerDetalle(indexDetalle:number) {
    console.log("index", indexDetalle);
    this.consumo.deleteDetalle(indexDetalle);
    this.total = this.consumo.total;
  }

  limpiarDetalle() {
    this.consumo.limpiarDetalle();
    this.total = this.consumo.total;
  }

  onItemSelect(selected: CompleterItem) {
    if (selected) {
      this.plato = selected.originalObject;
    }
  }

  onClienteSelect(selected: CompleterItem) {    
    if (selected && selected.originalObject != null) {
      this.cliente = selected.originalObject;
      //console.log(this.cliente);
    }
  }

  agregarADetalle() {
    this.flagMensaje = false;
    if(this.consumo == null){
      this.consumo = new Consumo(0,this.cliente,0, new Date());
    }
    if(this.plato !== null && this.cantidad > 0){
      let det = new Detalle(0,this.plato,this.cantidad,this.consumo);
      this.consumo.adddDetalle(det);
      this.total = this.consumo.total;
    }else{
      this.flagMensaje = true;
    }
  }

  confirmar(event) {
    if (event) {

      if (this.cliente == null) {
        this.clienteService.registrar(this.busquedaCliente).subscribe(data =>{
          this.cliente = data;
          this.consumo.cliente = this.cliente;
          this.registrarConsumo();
        });
      }else{
        this.consumo.cliente = this.cliente;
        this.registrarConsumo();
      }

      
    }

    
  }

  private registrarConsumo(){
    this.consumoService.registrar(this.consumo).subscribe(data=>{
      console.log(data);
      this.consumo.resourceId = data.resourceId;
      console.log(this.consumo);
      this.consumoService.registrarDetalles(this.consumo);
    });

    setTimeout(() => {
      this.cliente = null;
      this.detalle = [];
      this.busqueda = null;
      this.busquedaCliente = null;
      this.cantidad = 0;
      this.total = 0;
      this.consumo = null;
    }, 3000);
  }
}

/*
{
	"_id" : "5a1ce9a619d87201dc4d49ce",
    "cliente" : {
        "_id" : "5a1ccb770bc30dd3cb5622d0"
    },
    "fechaPedido" : "9/11/2017",
    "total" : 941.52,
    "detalle" : [
	    	{
	    		"plato"	: {
	    			"_id" : "5a1c90190bc30dd3cb56168e"
	    		},
	    		"cantidad" : 3
	    	},
	    	{
	    		"plato"	: {
	    			"_id" : "5a1c90190bc30dd3cb56168e"
	    		},
	    		"cantidad" : 3
	    	},
	    	{
	    		"plato"	: {
	    			"_id": "5a1c90190bc30dd3cb56168e"
	    		},
	    		"cantidad" : 1
	    	}
    	]
}
*/