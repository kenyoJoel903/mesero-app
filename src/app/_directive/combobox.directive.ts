import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCombobox]'
})
export class ComboboxDirective {

  @HostBinding('class.open') estaAbierto: boolean = false;

  constructor() { }

  @HostListener('click') abrir(){
    this.estaAbierto = !this.estaAbierto
  }

}
