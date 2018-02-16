import { ConsultaService } from './../../../_service/consulta.service';
import { Detalle } from './../../../_model/detalle';

import { Component, TemplateRef, Input, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit{

  @Input() titulo: string;
  @Input() labelBoton: string; 
  @Input() urlDetalle: string;

  detalle:Array<Detalle>=[];
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
    private consultaService: ConsultaService) {}
 
  openModal(template: TemplateRef<any>) {
    let _detalles:Array<Detalle>=[];
    this.consultaService.getPedidoDetalles(this.urlDetalle)
      .subscribe(data=>{
        _detalles = data._embedded.detalles;
        if(_detalles.length == 0){
          this.detalle = _detalles;
        }else{
          let cont = 0;
          _detalles.forEach(det=>{
            this.consultaService.getDetallePlato(det._links.plato.href)
              .subscribe(_dat=>{
                det.plato = _dat;
                cont ++;
                if(cont == _detalles.length){
                  this.detalle = _detalles;
                }
              })
          });
        }
      })
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit(){
    
  }

}
