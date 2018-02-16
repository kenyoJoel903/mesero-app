import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { PlatoService } from '../../_service/plato.service';
import { Plato } from '../../_model/plato';

@Component({
  selector: 'app-plato-edicion',
  templateUrl: './plato-edicion.component.html',
  styleUrls: ['./plato-edicion.component.css']
})
export class PlatoEdicionComponent implements OnInit {
  id: number;
  edicion: boolean = false;  
  form: FormGroup

  constructor(private route: ActivatedRoute, private platoService: PlatoService, private router: Router) {
    this.form = new FormGroup({
      'id': new FormControl(0),
      'nombre': new FormControl(''),
      'urlImagen': new FormControl(''),
      'precio': new FormControl(0)
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.id = params['id'];
        this.edicion = params['id'] != null;
        this.initForm();
      }
    );
  }
 
  operar() {
    let nuevoPlato = new Plato(
          this.form.value['id'], 
          this.form.value['nombre'], 
          this.form.value['urlImagen'], 
          this.form.value['precio']);

    if (this.edicion) {
      this.platoService.actualizarPlato(nuevoPlato)        
    } else {
      this.platoService.agregarPlato(nuevoPlato);
    }
  }

  private initForm() {
    if (this.edicion) {
      this.platoService.getPlato(this.id).subscribe(data => {

        let id = 0;
        let nombre = '';
        let urlImagen = '';
        let precio = 0;

        let _data:Plato =  data;

        id = _data.resourceId;
        nombre = _data.nombre;
        urlImagen = _data.urlImagen;
        precio = _data.precio;

        this.form = new FormGroup({
          'id': new FormControl(id),
          'nombre': new FormControl(nombre),
          'urlImagen': new FormControl(urlImagen),
          'precio': new FormControl(precio)
        });
      });
    }


  }

}
