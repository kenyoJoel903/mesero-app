import { Consumo } from './consumo';
import { Base } from './response/response.base';
import { Plato } from './plato';
export class Detalle extends Base{    

    public resourceId: number;
    public plato: Plato;     
    public cantidad: number;
    public subtotal:number;
    public consumo:Consumo;

    constructor(resourceId:number, plato:Plato, cantidad:number, consumo:Consumo){
        super({});
        this.resourceId = resourceId;
        this.plato = plato;
        this.cantidad = cantidad;
        this.subtotal = this.plato.precio * this.cantidad;
        this.consumo = consumo;
    }

    public _detalle(){
        return {
            "plato" :`/platoes/${this.plato.resourceId}`,
            "cantidad" : this.cantidad,
            "subtotal" : this.subtotal,
            "consumo" : `/consumoes/${this.consumo.resourceId}`
        };
    }

    public index: number;
}