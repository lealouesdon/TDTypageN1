import {
    Nat, FabriqueNat
} from "./naturels";

/////////////////////////////////////////////////////
export class NombreDecimal implements Nat {
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
        return new Succ(predecesseur);
    }

    creerNatAvecValeur(valeur: number): Nat {

        if (valeur === 0) {
            return this.creerZero();
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(valeur - 1));
    }

    creerZero() : Nat {
      return new Zero();
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
/////////////////////////////////////////////////////






////////////////////////////////////////////////////
export class Zero implements Nat {

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
        return new Succ(predecesseur);
    }

    creerNatAvecValeur(valeur: number): Nat {

        if (valeur === 0) {
            return this.creerZero();
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(valeur - 1));
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

export class Succ implements Nat {

    constructor(private pred: Nat) { }

    val(): number {
        return this.pred.val() + 1;
    }

    estNul(): boolean {
        return false;
    }

    predecesseur(): Nat {
        return this.pred;
    }

    taille(): number {
        return this.representation().length;
    }

    chiffre(i: number): number {
        return parseInt(this.representation().charAt(this.taille() - 1 - i));

    }

    creerZero(): Nat {
        return new Zero();
    }

    creerSuccesseur(predecesseur: Nat): Nat {
        return new Succ(predecesseur);
    }

    creerNatAvecValeur(valeur: number): Nat {
        if (valeur === 0) {
            return this.creerZero()
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(valeur - 1));
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

export const zeroSuccZ: FabriqueNat<Nat> = new Zero();
export const zeroSuccS: FabriqueNat<Nat> = new Succ(new Zero());

export class ZeroRec extends Zero implements Nat {

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

export class SuccRec extends Succ implements Nat {

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
