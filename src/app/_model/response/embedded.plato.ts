import { Plato } from "../plato";

export class EmbeddedPlato{
    
    public platoes:Array<Plato>;

    constructor(platoes:Array<Plato>){
        this.platoes = platoes;
    }
}