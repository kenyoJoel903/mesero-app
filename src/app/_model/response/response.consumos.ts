import { EmbeddedConsumo } from './embedded.consumo';

import { Base } from './response.base';
export class ConsumosResponse extends Base {

    public _embedded:EmbeddedConsumo;

    constructor(_links:any, _embedded:EmbeddedConsumo){
        super(_links);
        this._embedded = _embedded;
    }
}