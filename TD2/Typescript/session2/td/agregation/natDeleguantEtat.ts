import {
    Nat,EtatNaturelPur
} from "./naturels";

export abstract class NatDeleguantEtat implements Nat{

    constructor(private etatNat : EtatNaturelPur){}
    
    abstract creerNatAvecEtat(etat : EtatNaturelPur) : Nat;

    etat() : EtatNaturelPur{
        return this.etatNat;
    }

    val(): number{
        return this.etatNat.val();
    }
    estNul(): boolean{
        return this.etatNat.estNul();
    }
    predecesseur(): EtatNaturelPur{
        return this.etatNat.predecesseur();
    }
    taille(): number{
        return this.etatNat.taille();
    }
    chiffre(i: number): number{
        return this.etatNat.chiffre(i);
    }

    creerNatAvecValeur(valeur: number): Nat{
        
    }
    creerZero(): Nat{

    }
    creerSuccesseur(predecesseur: Nat): Nat{

    }
    creerNatAvecRepresentation(repDecimale: string): Nat{

    }


}

export class NatCalculantAvecDesNombresDecimaux extends NatDeleguantEtat implements Nat{

    constructor(etatNat : EtatNaturelPur){super(etatNat);}

    creerNatAvecEtat(etat : EtatNaturelPur) : Nat{
        return new NatCalculantAvecDesNombresDecimaux(etat);
    }

    somme(nb : Nat) : Nat{

    }

    zero() : Nat{

    }

    produit(nb : Nat) : Nat{

    }

    un() : Nat{

    }

    modulo(nb : Nat) : Nat{

    }

    div(nb : Nat) : Nat{

    }

    equals(obj : Object) : boolean {

    }

    toString() : string{

    }
}