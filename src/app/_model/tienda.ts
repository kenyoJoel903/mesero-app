import { Base } from './response/response.base';
export class Tienda extends Base {
    public resourceId: number;
    public nombre: string;
    public direccion: string;
    public fotoUrl :string;

    constructor(resourceId: number, nombre: string, direccion: string, fotoUrl:string ){
        super({});
        this.resourceId = resourceId;
        this.nombre = nombre;
        this.direccion = direccion;
        this.fotoUrl = fotoUrl;
    }

    public _tienda(){
        return {
            "nombre": this.nombre,
            "direccion" : this.direccion,
            "fotoUrl" : this.fotoUrl
        }
    }
}