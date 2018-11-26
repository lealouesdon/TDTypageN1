import { Mot } from "./Mot";

export class ConsRec extends Mot{
    

    public var_lettre:string;
    public var_reste:Mot;
    public vTaille:number;

    public constructor(i:string, ens:Mot){
        super();
        this.var_lettre=i;
        this.var_reste=ens;
        this.vTaille = 1 + this.var_reste.taille();
    }

    taille(): number {
        return this.vTaille;
    }

    casCons():boolean{
        return true;
    }

    caractere():string{
        return this.var_lettre;
    }

    reste():Mot{
        return this.var_reste;
    }

}