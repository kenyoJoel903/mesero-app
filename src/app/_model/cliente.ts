import { Base } from './response/response.base';
export class Cliente extends Base {
    public resourceId: number;
    public nombreCompleto: string;
    public dni: string;

    constructor(resourceId: number, nombreCompleto: string, dni: string ){
        super({});
        this.resourceId = resourceId;
        this.nombreCompleto = nombreCompleto;
        this.dni = dni;
    }

    public _cliente(){
        return {
            "nombreCompleto": this.nombreCompleto,
            "dni" : this.dni
        }
    }
}