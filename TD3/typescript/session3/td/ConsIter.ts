import { Mot } from "./Mot";

export class ConsIter extends Mot{

    public var_lettre:string;
    public var_reste:Mot;

    public constructor(i:string, ens:Mot){
        super();
        this.var_lettre=i;
        this.var_reste=ens;
    }

    casCons():boolean{
        return true;
    }

    taille(): number {
        var result = 0;
		var tempRest:Mot = this.var_reste;
		while(!tempRest.casVide()) {
			result++;
			tempRest = tempRest.reste();
		}
        return 1 + result;
    }

    caractere():string{
        return this.var_lettre;
    }

    reste():Mot{
        return this.var_reste;
    }

}