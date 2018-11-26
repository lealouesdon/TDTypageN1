import { Mot } from "./Mot";
import { Iterateur } from "./Iterateur";

export class UnionIter extends Mot {
    private motGauche: Mot;
	private motDroit: Mot;
    private vTaille: number;

    public constructor(g:Mot, d:Mot){
        super();
        this.motGauche=g;
        this.motDroit=d;
        this.vTaille = this.motGauche.taille() + this.motDroit.taille();
    }


    taille(): number {
    //     var result = 0;
	// 	var tempGauche: Mot = this.motGauche;
	// 	while(!tempGauche.casVide()) {
	// 		result++;
	// 		tempGauche = tempGauche.reste();
	// 	}
	// 	var tempDroit = this.motDroit;
	// 	while(!tempDroit.casVide()) {
	// 		result++;
	// 		tempDroit = tempDroit.reste();
	// 	}
    // return result;
    return this.vTaille;
    }

    casUnion():boolean{
        return true;
    }

    reste():Mot{
        console.log("Passe par reste");
        var i:Iterateur = this.iterateur();
        return i.reste();
    }

    caractere():string{
        var i:Iterateur = this.iterateur();
        return i.next().value;
    }

    gauche():Mot{
        return this.motGauche;
    }

    droit():Mot{
        return this.motDroit;
    }
}