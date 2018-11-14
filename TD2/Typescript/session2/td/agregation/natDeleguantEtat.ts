import {
    Nat,EtatNaturelPur
} from "./naturels";
import { ZeroInductif } from "./natInductif";
import {FabriqueNat} from "./naturels";

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
        return new NatCalculantAvecDesInts(this.etat().creerNatAvecValeur(valeur));
    }

    creerZero(): Nat{
        return new NatCalculantAvecDesInts(this.etat().creerZero());
    }

    creerSuccesseur(predecesseur: Nat): Nat{
        return new NatCalculantAvecDesInts(this.etat().creerSuccesseur(this.etat()));
    }

    creerNatAvecRepresentation(repDecimale: string): Nat{
        return new NatCalculantAvecDesNombresDecimaux(this.etat().creerNatAvecRepresentation(repDecimale));
    }

    abstract somme(nb : Nat) : Nat;
    abstract zero() : Nat;
    abstract produit(nb : Nat) : Nat;
    abstract un() : Nat;
    abstract div(nb : Nat) : Nat;
    abstract modulo(nb : Nat) : Nat;
}

export class NatCalculantAvecDesNombresDecimaux extends NatDeleguantEtat implements Nat{

    constructor(etatNat : EtatNaturelPur){super(etatNat);}

    creerNatAvecEtat(etat : EtatNaturelPur) : Nat{
        return new NatCalculantAvecDesNombresDecimaux(etat);
    }

    somme(nb : Nat) : Nat{
        return new NatCalculantAvecDesNombresDecimaux(super.etat().creerNatAvecRepresentation(String(this.val() + nb.val())));
    }

    zero() : Nat{
        return new NatCalculantAvecDesNombresDecimaux(super.etat().creerZero());
    }

    produit(nb : Nat) : Nat{
        return new NatCalculantAvecDesNombresDecimaux(super.etat().creerNatAvecRepresentation(String(this.val() * nb.val())));
    }

    un() : Nat{
        return new NatCalculantAvecDesNombresDecimaux(super.etat().creerNatAvecValeur(1));
    }

    modulo(nb : Nat) : Nat{
        return new NatCalculantAvecDesNombresDecimaux(super.etat().creerNatAvecRepresentation(String(this.val() % nb.val())));
    }

    div(nb : Nat) : Nat{
        return new NatCalculantAvecDesNombresDecimaux(super.etat().creerNatAvecRepresentation(String(this.val() / nb.val())));
    }

    /*equals(obj : Object) : boolean {
        return 
    }*/

    toString() : string{
        return String(this.val());
    }
}

export class NatCalculantAvecDesInts extends NatDeleguantEtat implements Nat{

    constructor(etatNat : EtatNaturelPur){super(etatNat);}

    creerNatAvecEtat(etat : EtatNaturelPur) : Nat{
        return new NatCalculantAvecDesInts(etat);
    }

    somme(nb : Nat) : Nat{
        return new NatCalculantAvecDesInts(super.etat().creerNatAvecValeur(this.val() + nb.val()));
    }

    zero() : Nat{
        return new NatCalculantAvecDesInts(super.etat().creerZero());
    }

    produit(nb : Nat) : Nat{
        return new NatCalculantAvecDesInts(super.etat().creerNatAvecValeur(this.val() * nb.val()));
    }

    un() : Nat{
        return new NatCalculantAvecDesInts(super.etat().creerNatAvecValeur(1));
    }

    modulo(nb : Nat) : Nat{
        return new NatCalculantAvecDesInts(super.etat().creerNatAvecValeur(this.val() % nb.val()));
    }

    div(nb : Nat) : Nat{
        return new NatCalculantAvecDesInts(super.etat().creerNatAvecValeur(this.val() / nb.val()));
    }

    /*equals(obj : Object) : boolean {

    }*/

    toString() : string{
        return String(this.val());
    }
}

export class NatCalculantRecursivement extends NatDeleguantEtat implements Nat{

    constructor(etatNat : EtatNaturelPur){super(etatNat);}

    creerNatAvecEtat(etat : EtatNaturelPur) : Nat{
        return new NatCalculantRecursivement(etat);
    }

    somme(nb : Nat) : Nat{
        return new NatCalculantRecursivement(super.etat().creerNatAvecValeur(this.val() + nb.val()));
    }

    zero() : Nat{
        return new NatCalculantRecursivement(super.etat().creerZero());
    }

    produit(nb : Nat) : Nat{
        return new NatCalculantRecursivement(super.etat().creerNatAvecValeur(this.val() * nb.val()));
    }

    un() : Nat{
        return new NatCalculantRecursivement(super.etat().creerNatAvecValeur(1));
    }

    modulo(nb : Nat) : Nat{
        return new NatCalculantRecursivement(super.etat().creerNatAvecValeur(this.val() % nb.val()));
    }

    div(nb : Nat) : Nat{
        return new NatCalculantRecursivement(super.etat().creerNatAvecValeur(this.val() / nb.val()));
    }

    /*equals(obj : Object) : boolean {

    }*/

    toString() : string{
        return String(this.val());
    }
}

export const NatCalculantAvecDesNombresDecimauxZ: FabriqueNat<Nat> = new NatCalculantAvecDesNombresDecimaux(new ZeroInductif());
export const NatCalculantAvecDesIntsZ: FabriqueNat<Nat> = new NatCalculantAvecDesInts(new ZeroInductif());
export const NatCalculantRecursivementZ: FabriqueNat<Nat> = new NatCalculantRecursivement(new ZeroInductif());
