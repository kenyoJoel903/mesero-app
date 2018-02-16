import { Base } from './response/response.base';

export class Plato extends Base{

    public resourceId: number;
    public nombre: string;
    public urlImagen: string;
    public precio: number;

    constructor(resourceId: number, nombre: string, urlImagen: string, precio: number){
        super({});
        this.resourceId = resourceId;
        this.nombre = nombre;
        this.urlImagen = urlImagen;
        this.precio = precio;
    }
    
    public _plato(){
        return {
            "nombre" : this.nombre,
            "urlImagen" : this.urlImagen,
            "precio" : this.precio
        }
    }
}