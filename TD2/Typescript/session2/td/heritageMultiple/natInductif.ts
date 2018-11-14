import {
    Nat, FabriqueNat, 
} from "./naturels";

import{
    EtatZero
} from "./etatZero";

import{
    EtatSucc
} from "./etatSucc";

import{
    AlgebreNatDecimal
}from "./algebreNatDecimal"

import{
    AlgebreNatRecursifSuccesseur
}from "./algebreNatRecursifSuccesseur"

import{
    AlgebreNatRecursifZero
}from "./algebreNatRecursifZero"

////////////////////////////////////////////////////

export class ZeroParInt extends EtatZero {

    val(): number {
        return 0;
    }

    estNul(): boolean {
        return true;
    }

    predecesseur(): Nat {
        throw new Error("* Erreur : naturel nul sans prédécesseur.");
    }

    taille(): number {
        return 1;
    }

    chiffre(i: number): number {
        return 0;
    }

    creerZero(): Nat {
        return this;
    }

    creerSuccesseur(predecesseur: Nat): Nat {
        return new SuccParInt(predecesseur);
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

export class SuccParInt extends EtatSucc {

    constructor(pred: Nat) {super(pred); }


    estNul(): boolean {
        return false;
    }



    taille(): number {
        return this.representation().length;
    }

    chiffre(i: number): number {
        return parseInt(this.representation().charAt(this.taille() - 1 - i));

    }

    creerZero(): Nat {
        return new ZeroParInt();
    }

    creerSuccesseur(predecesseur: Nat): Nat {
        return new SuccParInt(predecesseur);
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

export const zeroSuccZ: FabriqueNat<Nat> = new ZeroParInt();
export const zeroSuccS: FabriqueNat<Nat> = new SuccParInt(new ZeroParInt());

export class ZeroRec extends EtatZero implements AlgebreNatRecursifZero {

    creerZero(): Nat {
        return new ZeroRec();
    }

    creerSuccesseur(predecesseur: Nat): Nat {
        return new SuccRec(predecesseur);
    }

    somme(x: Nat): Nat {
        return x;
    }

    zero(): Nat {
        return this.creerZero();
    }

    produit(x: Nat): Nat {
        return this.zero();
    }

    un(): Nat {
        return this.creerSuccesseur(this.zero());
    }

    modulo(x: Nat): Nat {
        return this.creerZero();
    }

    div(x: Nat): Nat {
        return this.creerZero();
    }

    representation(): string {
        return "0";
    }
    estEgal(n: Nat): boolean {
        return n.estNul();
    }

}

export class SuccRec extends EtatSucc implements AlgebreNatRecursifSuccesseur {

    creerZero(): Nat {
        return new ZeroRec();
    }

    creerSuccesseur(predecesseur: Nat): Nat {
        return new SuccRec(predecesseur);
    }

    somme(x: Nat): Nat {
        if (x.estNul()) {
            return this;
        }
        return this.creerSuccesseur(this.somme(x.predecesseur()));
    }

    produit(x: Nat): Nat {
        if (x.estNul()) {
            return this.zero();
        }
        return this.somme(this.produit(x.predecesseur()));
    }

    modulo(x: Nat): Nat {
        const r = this.predecesseur().modulo(x);
        return this.creerSuccesseur(r).estEgal(x) ?
            this.creerZero() :
            this.creerSuccesseur(r);
    }

    div(x: Nat): Nat {
        const r = this.predecesseur().modulo(x);
        const q = this.predecesseur().div(x);
        return this.creerSuccesseur(r).estEgal(x) ?
            this.creerSuccesseur(q) :
            q;
    }

    estEgal(n: Nat): boolean {
        if (n.estNul())
            return false;
        return this.predecesseur().estEgal(n.predecesseur());
    }


}

export const zeroSuccRecZ: FabriqueNat<Nat> = new ZeroRec();
export const zeroSuccRecS: FabriqueNat<Nat> = new SuccRec(new ZeroRec());

export class SuccDecimal extends EtatSucc implements AlgebreNatDecimal {
  constructor(pred: Nat) {super(pred); }

  creerZero() : Nat{
    return new ZeroDecimal();
  }

}

export class ZeroDecimal extends EtatZero implements AlgebreNatDecimal {

  creerZero() : Nat{
    return this;
  }


}
