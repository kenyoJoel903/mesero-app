import { Cliente } from './cliente';
import { Base } from './response/response.base';
import { Detalle } from './detalle';
export class Consumo extends Base{

    public resourceId:number;
    public cliente:Cliente;
    public total:number;
    public fechapedido:Date;

    public detalles:Array<Detalle>=[];

    constructor(resourceId:number, cliente:Cliente, total:number, fechapedido:Date){
        super({});
        this.resourceId = resourceId;
        this.cliente = cliente;
        this.total = total;
        this.fechapedido = fechapedido;
    }

    public adddDetalle(detalle:Detalle){
        this.total = this.total + detalle.subtotal;
        this.detalles.push(detalle);
    }

    public deleteDetalle(indexDetalle:number){
        let detalle = this.detalles[indexDetalle];
        this.total = this.total - detalle.subtotal;
        this.detalles.splice(indexDetalle, 1);
    }

    public limpiarDetalle(){
        this.detalles= [];
        this.total = 0;
    }

    public _consumo(){
        return {
            "cliente" : `/clientes/${this.cliente.resourceId}`,
            "total": this.total,
            "fechapedido": this.transformDate(this.fechapedido)
        };
    }

    private transformDate(date:Date){
        let month = date.getMonth() + 1;
        return `${date.getFullYear()}/${month}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
}