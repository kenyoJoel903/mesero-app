import { Detalle } from "../detalle";

export class EmbeddedDetalle{
    
    public detalles:Array<Detalle>;

    constructor(detalles:Array<Detalle>){
        this.detalles = detalles;
    }
}