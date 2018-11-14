import {
    SuccParInt
}from "./natInductif";

import {
    Nat
} from "./naturels";

import{
    NatParInt
}from "./natParInt";

export abstract class EtatZero implements Nat {
    constructor() { }

    chiffre(i : number) : number{
      return 0;
    }

    taille() : number{
      return 0;
    }

    val() : number{
      return 0;
    }

    estNul() : boolean{
      return false;
    }

    predecesseur() : Nat{
      throw new Error("* Erreur : naturel nul sans prédécesseur.");
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
      return this;
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