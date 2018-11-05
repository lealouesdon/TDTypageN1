import {
    SemiAnneauUnitaireEuclidien
} from "../../structuresAlgebriques/hierarchie";
import { Representable, Identifiable } from "../../bibliotheque/proprietes";

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