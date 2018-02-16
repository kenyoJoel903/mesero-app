
import { Base } from './response.base';
import { EmbeddedPlato } from './embedded.plato';
export class PlatosResponse extends Base {

    public _embedded:EmbeddedPlato;

    constructor(_links:any, _embedded:EmbeddedPlato){
        super(_links);
        this._embedded = _embedded;
    }
}