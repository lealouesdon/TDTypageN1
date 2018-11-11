import {
    EtatNaturelPur
} from "./naturels";

import {
    IntPositif
} from "./intPositif";

export abstract class NaturelInductif extends EtatNaturelPur{
    creerZero() : EtatNaturelPur{
        return new ZeroInductif();
    }

    creerSuccesseur(predecesseur : EtatNaturelPur) : EtatNaturelPur{
        return this.creerNatAvecValeur(predecesseur.val() + 1);
    }

    creerNatAvecValeur(nb : number) : EtatNaturelPur{
        if(nb<0){
            throw "Erreur de valeur";
        }else if(nb==0){
            return new ZeroInductif();
        }else{
            return new SuccInductif(new IntPositif(nb-1));
        }
    }
}

export class ZeroInductif extends NaturelInductif{
    constructor(){super();}

    chiffre(i: number) : number{
        return 0;
    }

    taille() : number{
        return 0;
    }

    val(){
        return 0;
    }

    estNul() : boolean{
        return this.val()==0;
    }

    predecesseur() : EtatNaturelPur{
        return super.creerNatAvecValeur(this.val()-1);
    }

}


export class SuccInductif extends NaturelInductif{
    constructor(private predec : EtatNaturelPur){super();}

    chiffre(i: number) : number{
        return parseInt(String(this.val()).charAt(this.taille() - 1 - i));
    }

    taille() : number{
        return String(this.val()).length;
    }

    val(){
        return this.predec.val() + 1;
    }

    estNul() : boolean{
        return this.val()==0;
    }

    predecesseur() : EtatNaturelPur{
        return super.creerNatAvecValeur(this.val()-1);
    }

}

