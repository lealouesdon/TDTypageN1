import {
    EtatNaturelPur
} from "./naturels";

export class NombreDecimal extends EtatNaturelPur{
    constructor(private chiffres : string){super();}

    chiffre(i: number) : number{
        return parseInt(this.chiffres.charAt(this.taille() - 1 - i));
    }

    taille() : number{
        return this.chiffres.length;
    }

    val(){
        return parseInt(this.chiffres);
    }

    estNul() : boolean{
        return this.val()==0;
    }

    predecesseur() : EtatNaturelPur{
        return super.creerNatAvecValeur(this.val()-1);
    }

    creerNatAvecRepresentation(val : string) : EtatNaturelPur{
        return new NombreDecimal(val);
    }


}