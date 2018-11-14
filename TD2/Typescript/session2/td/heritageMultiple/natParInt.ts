import {
    Nat,FabriqueNat
} from "./naturels";

import {
    IntPositif
} from "./intPositif";

import{
    AlgebreNatDecimal
}from "./algebreNatDecimal"

import{
    AlgebreNatParInt
}from "./algebreNatParInt"

import{
    AlgebreNatRecursif
}from "./algebreNatRecursif"

export class NatParInt extends IntPositif implements AlgebreNatParInt {

    constructor(valeur: number) {
      super(valeur);
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
    creerNatAvecRepresentation(repDecimale: string): Nat {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    }

    estNul(): boolean {
        return super.val() === 0;
    }

    predecesseur(): Nat {
        if (this.estNul()) {
            throw new Error("* Erreur : naturel nul sans prédécesseur.");
        }
        return this.creerNatAvecValeur(this.val() - 1);
    }

    taille(): number {
        return this.representation().length;
    }

    chiffre(i: number): number {
        return parseInt(this.representation().charAt(this.taille() - 1 - i));
    }


    somme(x: Nat): Nat {
        return this.creerNatAvecValeur(x.val() + this.val());
    }

    zero(): Nat {
        return this.creerZero();
    }

    produit(x: Nat): Nat {
        return this.creerNatAvecValeur(x.val() * this.val());
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

    representation(): string {
        return this.val().toString();
    }

    estEgal(n: Nat): boolean {
        return n.val() == this.val();
    }


}

export const natParInt: FabriqueNat<Nat> = new NatParInt(0);

export class NatParIntDecimal extends IntPositif implements AlgebreNatDecimal {
  constructor(valeur: number) {
    super(valeur);
  }

  creerNatAvecRepresentation(repDecimale: string): Nat {
      return this.creerNatAvecValeur(parseInt(repDecimale));
  }

  toString() : string{
    return super.representation();
  }

}

export class NatParIntRecursif extends IntPositif implements AlgebreNatRecursif {
  constructor(valeur: number) {
    super(valeur);
  }

  creerNatAvecRepresentation(repDecimale: string): Nat {
      return this.creerNatAvecValeur(parseInt(repDecimale));
  }

  toString() : string{
    return super.representation();
  }

}
