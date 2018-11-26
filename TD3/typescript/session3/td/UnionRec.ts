import { Mot } from "./Mot";
import { Iterateur } from "./Iterateur";

export class UnionRec extends Mot {

    public motGauche: Mot;
	public motDroit: Mot;
    public vTaille: number;

    public constructor(g:Mot, d:Mot){
        super();
        this.motGauche=g;
        this.motDroit=d;
        this.vTaille = g.taille()+d.taille();
    }

    taille(): number {
        return this.vTaille;
    }

    casUnion():boolean{
        return true;
    }

    reste():Mot{
        var i:Iterateur = this.iterateur();
        return i.reste();
    }

    caractere():string{
        if(!this.motGauche.estVide()) {
			return this.motGauche.caractere();
        } else if(!this.motDroit.estVide()) {
            return this.motDroit.caractere();
        } else {
            throw Error("UnsupportedOperation");
        }	
    }

    gauche():Mot{
        return this.motGauche;
    }

    droit():Mot{
        return this.motDroit;
    }

}