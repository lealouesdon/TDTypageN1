import {
    EtatNaturelPur
} from "./naturels";

export class IntPositif extends EtatNaturelPur{
    constructor(private nb : number){super();}

    chiffre(i: number) : number{
        return parseInt(String(this.nb).charAt(this.taille() - 1 - i));
    }

    taille() : number{
        return String(this.nb).length;
    }

    val(){
        return this.nb;
    }

    estNul() : boolean{
        return this.val()==0;
    }

    predecesseur() : EtatNaturelPur{
        return super.creerNatAvecValeur(this.val()-1);
    }

    creerNatAvecValeur(nb : number) : EtatNaturelPur{
        return super.creerNatAvecValeur(nb);
    }

}