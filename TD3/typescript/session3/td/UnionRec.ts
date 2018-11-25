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