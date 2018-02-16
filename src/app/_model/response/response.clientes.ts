import { EmbeddedCliente } from './embedded.cliente';
import { Base } from './response.base';
export class ClientesResponse extends Base {

    public _embedded:EmbeddedCliente;

    constructor(_links:any, _embedded:EmbeddedCliente){
        super(_links);
        this._embedded = _embedded;
    }
}