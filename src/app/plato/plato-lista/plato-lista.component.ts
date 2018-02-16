import { Plato } from './../../_model/plato';
import { Component, OnInit } from '@angular/core';
import { PlatoService } from '../../_service/plato.service';
import { Router, ActivatedRoute } from '@angular/router';

interface CursoResponse {
  nombre: string
  urlCover: string
}

@Component({
  selector: 'app-plato-lista',
  templateUrl: './plato-lista.component.html',
  styleUrls: ['./plato-lista.component.css']
})
export class PlatoListaComponent implements OnInit {

  platos: Plato[];
  filterQuery = "";

  constructor(private platoService: PlatoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.platoService.platosCambio.subscribe(data => {
      this.platos = data._embedded.platoes;
      console.log(this.platos);
    });

    //this.platos = this.platoService.getPlatos();
    this.platoService.getPlatos().subscribe(data => {
      console.log(data);
      this.platos = data._embedded.platoes;
      console.log(this.platos);
    });

   
  }

  crearNuevoPlato() {
    this.router.navigate(['nuevo'], { relativeTo: this.route });
  }
}
