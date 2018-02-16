import { Cliente } from './../cliente';

export class EmbeddedCliente{
    
    public clientes:Array<Cliente>;

    constructor(clientes:Array<Cliente>){
        this.clientes = clientes;
    }
}