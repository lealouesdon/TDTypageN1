import {
    SemiAnneauUnitaireEuclidien
} from "../../../structuresAlgebriques/hierarchie";
import { Representable, Identifiable } from "../../../bibliotheque/proprietes";

export interface FabriqueNat<T> {
    creerNatAvecValeur(valeur: number): T;
    creerZero(): T;
    creerSuccesseur(predecesseur: T): T;
    creerNatAvecRepresentation(repDecimale: string): T;

}

export interface Nat
    extends FabriqueNat<Nat>, SemiAnneauUnitaireEuclidien<Nat>,
    Identifiable<Nat>, Representable {
    val(): number;
    estNul(): boolean;
    predecesseur(): Nat;
    taille(): number;
    chiffre(i: number): number;
}

export interface NatInductif extends Nat{
    creerNatAvecValeur(i : number) : Nat;
    creerNatAvecRepresentation(repDecimale: string) : Nat;
}

export interface AlgebreNatRecursifSuccesseur extends Nat{
    somme(nb : Nat) : Nat;
    zero() : Nat;
    produit(nb : Nat) : Nat;
    un() : Nat;
    modulo(nb : Nat) : Nat;
    div(nb : Nat) : Nat;
    estEgal(obj : Object) : boolean;
    representation() : string;
}

export interface AlgebreNatRecursifZero extends Nat{
    somme(nb : Nat) : Nat;
    zero() : Nat;
    produit(nb : Nat) : Nat;
    un() : Nat;
    modulo(nb : Nat) : Nat;
    div(nb : Nat) : Nat;
    estEgal(obj : Object) : boolean;
    representation() : string;
}

export interface AlgebreNatRecursif extends AlgebreNatRecursifSuccesseur,AlgebreNatRecursifZero{
    somme(nb : Nat) : Nat;
    zero() : Nat;
    produit(nb : Nat) : Nat;
    un() : Nat;
    modulo(nb : Nat) : Nat;
    div(nb : Nat) : Nat;
    estEgal(obj : Object) : boolean;
    representation() : string;
}

export interface AlgebreNatParInt extends Nat{
    somme(nb : Nat) : Nat;
    zero() : Nat;
    produit(nb : Nat) : Nat;
    un() : Nat;
    modulo(nb : Nat) : Nat;
    div(nb : Nat) : Nat;
    estEgal(obj : Object) : boolean;
    representation() : string;
}

export interface AlgebreNatDecimal extends Nat{
    somme(nb : Nat) : Nat;
    zero() : Nat;
    produit(nb : Nat) : Nat;
    un() : Nat;
    modulo(nb : Nat) : Nat;
    div(nb : Nat) : Nat;
    estEgal(obj : Object) : boolean;
    representation() : string;
}
