import { Mot } from "./Mot";
import { Iterateur } from "./Iterateur";

export class UnionIter extends Mot {
    public motGauche: Mot;
	public motDroit: Mot;
    public vTaille: number;

    public constructor(g:Mot, d:Mot){
        super();
        this.motGauche=g;
        this.motDroit=d;
    }


    taille(): number {
        var result = 0;
		var tempGauche: Mot = this.motGauche;
		while(!tempGauche.casVide()) {
			result++;
			tempGauche = tempGauche.reste();
		}
		var tempDroit = this.motDroit;
		while(!tempDroit.casVide()) {
			result++;
			tempDroit = tempDroit.reste();
		}
    return result;
    }

    casUnion():boolean{
        return true;
    }

    reste():Mot{
        var i:Iterateur = this.iterateur();
        return i.reste();
    }

    caractere():string{
        var i:Iterateur = this.iterateur();
        return i.suivant();
    }

    gauche():Mot{
        return this.motGauche;
    }

    droit():Mot{
        return this.motDroit;
    }
}