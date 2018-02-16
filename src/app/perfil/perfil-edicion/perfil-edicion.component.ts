import { TiendaService } from '../../_service/tienda.service';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Tienda } from '../../_model/tienda';

@Component({
  selector: 'app-perfil-edicion',
  templateUrl: './perfil-edicion.component.html',
  styleUrls: ['./perfil-edicion.component.css']
})
export class PerfilEdicionComponent implements OnInit {

  id: number;
  form: FormGroup

  constructor(private route: ActivatedRoute, 
    private tiendaService: TiendaService, 
    private router: Router) { 

      this.form = new FormGroup({
        'resourceId': new FormControl(0),
        'nombre': new FormControl(''),
        'fotoUrl': new FormControl(''),
        'direccion': new FormControl('')
      });
    }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.initForm();
    }
  );
  }

  initForm(){
    this.tiendaService.getTienda(this.id).subscribe(data=>{
      let tienda: Tienda = data;
      this.form = new FormGroup({
        'resourceId': new FormControl(tienda.resourceId),
        'nombre': new FormControl(tienda.nombre),
        'fotoUrl': new FormControl(tienda.fotoUrl),
        'direccion': new FormControl(tienda.direccion)
      });
    })
  }

  guardarEdicion(){
    let tienda = new Tienda(
      this.form.value['resourceId'],
      this.form.value['nombre'],
      this.form.value['direccion'],
      this.form.value['fotoUrl'],
    );
    this.tiendaService.updateTienda(tienda);
    setTimeout(() => {
      this.router.navigate(['perfil']);
    }, 2000);
    
  }

}
