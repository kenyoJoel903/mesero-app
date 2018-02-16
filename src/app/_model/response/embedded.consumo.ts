import { Consumo } from "../consumo";

export class EmbeddedConsumo{
    
    public consumoes:Array<Consumo>;

    constructor(consumoes:Array<Consumo>){
        this.consumoes = consumoes;
    }
}