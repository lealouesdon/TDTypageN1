import {
    Nat
} from "./naturels";

import {
    ZeroParInt,SuccParInt
}from "./natInductif";

export abstract class NombreDecimal implements Nat {
    constructor(private nb: string) { }

    chiffre(i : number) : number{
      return parseInt(this.nb.charAt(this.taille() - 1 - i));;
    }

    taille() : number{
      return this.nb.length;
    }

    val() : number{
      return parseInt(this.nb);
    }

    estNul() : boolean{
      return false;
    }

    predecesseur() : Nat{
      return this.creerNatAvecValeur(this.val() - 1);
    }

    creerSuccesseur(predecesseur: Nat): Nat {
        return new SuccParInt(predecesseur);
    }

    creerNatAvecValeur(valeur: number): Nat {

        if (valeur === 0) {
            return this.creerZero();
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(valeur - 1));
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