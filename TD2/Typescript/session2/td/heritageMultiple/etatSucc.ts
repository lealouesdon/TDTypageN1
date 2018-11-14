import {
    ZeroParInt,SuccParInt
}from "./natInductif";

import {
    Nat
} from "./naturels";

import{
    NatParInt
}from "./natParInt";

export abstract class EtatSucc implements Nat {
    constructor(private pred: Nat) { }

    chiffre(i : number) : number{
      return parseInt(this.representation().charAt(this.taille() - 1 - i));;
    }

    taille() : number{
      return this.representation().length;
    }

    val() : number{
      return this.pred.val() - 1;
    }

    estNul() : boolean{
      return false;
    }

    predecesseur() : Nat{
      return this.pred;
    }

    creerSuccesseur(predecesseur: Nat): Nat {
        return new SuccParInt(predecesseur);
    }

    creerNatAvecValeur(valeur: number): Nat {
        if (valeur < 0) {
            throw new Error('* Erreur : valeur négative.');
        }
        if (valeur % 1 !== 0) {
            throw new Error('* Erreur : valeur non entière.');
        }
        return new NatParInt(valeur);
    }

    creerZero() : Nat {
      return new ZeroParInt();
    }

    creerNatAvecRepresentation(repDecimale: string): Nat {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    }

    somme(x: Nat): Nat {
        return this.creerNatAvecValeur(x.val() + this.val());
    }

    zero(): Nat {
        return this.creerZero();
    }

    un(): Nat {
        return this.creerNatAvecValeur(1);
    }

    modulo(x: Nat): Nat {
        return this.creerNatAvecValeur(this.val() % x.val());
    }

    div(x: Nat): Nat {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    }

    produit(x: Nat): Nat {
        return this.creerNatAvecValeur(x.val() * this.val());
    }

    representation(): string {
        return this.val().toString();
    }

    estEgal(n: Nat): boolean {
        return n.val() == this.val();
    }

}