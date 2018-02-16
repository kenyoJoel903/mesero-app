import { Cliente } from './cliente';
import { Detalle } from './detalle';

export class Pedido{
    public _id: number;
    public cliente: Cliente;
    public fechaPedido: Date;
    public total: number;
    public detalle: Detalle[];    
}