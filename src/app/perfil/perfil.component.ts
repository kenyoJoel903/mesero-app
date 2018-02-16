import { Tienda } from './../_model/tienda';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TiendaService } from '../_service/tienda.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  tienda:Tienda = null;

  constructor(private tiendaService:TiendaService ,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let tiendas:Array<Tienda> = [];
    
    this.tiendaService.tiendasCambio.subscribe(data =>{
      tiendas = data._embedded.tiendas;
      if(tiendas.length > 0){
        this.tienda = tiendas[0];
      }else{
        this.tienda = new Tienda(0,"Mi Restaurant",  "Lima, Perú", "https://www.oceanografic.org/wp-content/uploads/2016/01/restaurante_submarino_4-890x500.jpg");
        this.inciarTienda();
      }
    });

    this.tiendaService.getTiendas().subscribe(data=>{
      tiendas = data._embedded.tiendas;
      if(tiendas.length > 0){
        this.tienda = tiendas[0];
      }else{
        this.tienda = new Tienda(0,"Mi Restaurant",  "Lima, Perú", "https://www.oceanografic.org/wp-content/uploads/2016/01/restaurante_submarino_4-890x500.jpg");
        this.inciarTienda();
      }
    });
  }

  private inciarTienda(){
    this.tiendaService.agregarTienda(this.tienda).subscribe(data=>{
      this.tienda = data;
    })
  }

  editarTienda(){
    this.router.navigate([this.tienda.resourceId + '/editar'], { relativeTo: this.route });
  }



}
