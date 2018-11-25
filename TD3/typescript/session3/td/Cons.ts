import { Mot } from "./Mot";

export class Cons extends Mot{

    var_caractere :string;
    var_reste: Mot;
    var_taille:number;

    constructor(caractere:string, reste:Mot){
        super();
        this.var_caractere=caractere;
        this.var_reste = reste;
    }

    taille(): number {
        return this.var_taille;
    }

    casCons():boolean{
        return true;
    }

    caractere():string{
        return this.var_caractere;
    }

    reste():Mot{
        return this.var_reste;
    }

}