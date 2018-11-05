import {
    Nat, FabriqueNat, NatInductif
} from "./naturels";

abstract class EtatZero implements NatInductif{
    constructor () {};
    abstract creerNatAvecValeur(i : number) : Nat;
    abstract creerNatAvecRepresentation(repDecimale: string) : Nat;
    abstract creerZero(): Nat;
    abstract creerSuccesseur(predecesseur: Nat): Nat;
    abstract val() : number;
    abstract estNul() : boolean;
    abstract predecesseur() : Nat;
    abstract chiffre(i :number) : number;
    abstract taille() : number;
    abstract somme(x : Nat) : Nat;
    abstract zero() : Nat;
    abstract produit(x : Nat) : Nat;
    abstract un() : Nat;
    abstract modulo(x : Nat) : Nat;
    abstract div(x : Nat) : Nat;
    abstract estEgal(x : Nat) : boolean;
    abstract representation() : string;
}
//////////////////////////////////////////////////////////////////////////
abstract class EtatSucc implements NatInductif{
    constructor () {};
    abstract creerNatAvecValeur(i : number) : Nat;
    abstract creerNatAvecRepresentation(repDecimale: string) : Nat;
    abstract creerZero(): Nat;
    abstract creerSuccesseur(predecesseur: Nat): Nat;
    abstract val() : number;
    abstract estNul() : boolean;
    abstract predecesseur() : Nat;
    abstract chiffre(i :number) : number;
    abstract taille() : number;
    abstract somme(x : Nat) : Nat;
    abstract zero() : Nat;
    abstract produit(x : Nat) : Nat;
    abstract un() : Nat;
    abstract modulo(x : Nat) : Nat;
    abstract div(x : Nat) : Nat;
    abstract estEgal(x : Nat) : boolean;
    abstract representation() : string;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export class ZeroCalculantSurInt extends EtatZero{

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
        return new SuccCalculantSurInt(predecesseur);
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
//////////////////////////////////////////////////////////////////

export class SuccCalculantSurInt extends EtatSucc {

    constructor(private pred: Nat) { super();}

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
        return new ZeroCalculantSurInt();
    }

    creerSuccesseur(predecesseur: Nat): Nat {
        return new SuccCalculantSurInt(predecesseur);
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
///////////////////////////////////////////////////////////////////////////////////////////////////
export const zeroSuccZ: FabriqueNat<Nat> = new ZeroCalculantSurInt();
export const zeroSuccS: FabriqueNat<Nat> = new SuccCalculantSurInt(new ZeroCalculantSurInt());

export class ZeroRec extends EtatZero implements Nat {

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

    estNul(): boolean {
        return true;
    }

    predecesseur(): Nat {
        throw new Error("* Erreur : naturel nul sans prédécesseur.");
    }

    chiffre(i: number): number {
        return 0;
    }

    taille(): number {
        return 1;
    }

    val(): number {
        return 0;
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



}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export class SuccRec extends EtatSucc {

    constructor(private pred: Nat) { super();}


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

    val(): number {
        return this.pred.val() + 1;
    }

    estNul(): boolean {
        return false;
    }

    chiffre(i: number): number {
        return parseInt(this.representation().charAt(this.taille() - 1 - i));

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

    representation(): string {
        return this.val().toString();
    }

    un(): Nat {
        return this.creerNatAvecValeur(1);
    }

    zero(): Nat {
        return this.creerZero();
    }

    predecesseur(): Nat {
        return this.pred;
    }

    taille(): number {
        return this.representation().length;
    }

}

export const zeroSuccRecZ: FabriqueNat<Nat> = new ZeroRec();
export const zeroSuccRecS: FabriqueNat<Nat> = new SuccRec(new ZeroRec());
