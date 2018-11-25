import { Mot } from "./Mot";

export class ConsRec extends Mot{
    

    public var_lettre:string;
    public var_reste:Mot;
    public var_taille:number;

    public constructor(i:string, ens:Mot){
        super();
        this.var_lettre=i;
        this.var_reste=ens;
    }

    taille(): number {
        return this.var_taille;
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