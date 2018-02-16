import { Component, OnInit } from '@angular/core';
import { Plato } from '../../_model/plato';
import { PlatoService } from '../../_service/plato.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-plato-detalle',
  templateUrl: './plato-detalle.component.html',
  styleUrls: ['./plato-detalle.component.css']
})
export class PlatoDetalleComponent implements OnInit {

  plato: Plato;
  id: number;

  constructor(private platoService: PlatoService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id']; //es el que esta definido en el routing
        console.log(this.id);

        this.platoService.getPlato(this.id).subscribe(data => {
          this.plato = data;
          console.log(this.plato);
        });        
      }
    )
  }

  editarPlato(){
    this.router.navigate(['editar'], { relativeTo: this.route });
  }

  eliminarPlato(event:boolean, plato: Plato){
    if(event){
      this.platoService.eliminarPlato(plato);
      this.router.navigate(['plato']);
    }
  }
}
