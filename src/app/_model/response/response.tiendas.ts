import { EmbeddedTienda } from './embedded.tienda';
import { Base } from './response.base';
export class TiendasResponse extends Base {

    public _embedded:EmbeddedTienda;

    constructor(_links:any, _embedded:EmbeddedTienda){
        super(_links);
        this._embedded = _embedded;
    }
}