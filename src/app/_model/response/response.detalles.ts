import { EmbeddedDetalle } from './embedded.detalle';

import { Base } from './response.base';
export class DetallesResponse extends Base {

    public _embedded:EmbeddedDetalle;

    constructor(_links:any, _embedded:EmbeddedDetalle){
        super(_links);
        this._embedded = _embedded;
    }
}