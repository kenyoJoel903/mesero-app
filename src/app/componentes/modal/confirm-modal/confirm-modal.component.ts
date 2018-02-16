import { Component, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent {

  @Input() titulo: string;
  @Input() labelBoton: string;
  @Input() btnClass: string = "btn btn-primary";
  @Output() estaConfirmado: EventEmitter<boolean> = new EventEmitter<boolean>();
  modalRef: BsModalRef;
  flagConfirmado: boolean = false;
  
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.flagConfirmado = true;
    this.modalRef.hide();
    this.estaConfirmado.emit(true);
  }
 
  decline(): void {
    this.flagConfirmado = false;
    this.modalRef.hide();
  }

}
