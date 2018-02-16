import { Tienda } from '../tienda';

export class EmbeddedTienda{
    
    public tiendas:Array<Tienda>;

    constructor(tiendas:Array<Tienda>){
        this.tiendas = tiendas;
    }
}