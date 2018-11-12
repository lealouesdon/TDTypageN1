import {
    SemiAnneauUnitaireEuclidien
} from "../../../structuresAlgebriques/hierarchie";
import { IntPositif } from "./intPositif";
import { ZeroInductif } from "./natInductif";

export interface FabriqueNat<T> {
    creerNatAvecValeur(valeur: number): T;
    creerZero(): T;
    creerSuccesseur(predecesseur: T): T;
    creerNatAvecRepresentation(repDecimale: string): T;

}

export interface Nat extends FabriqueNat<Nat>, EtatNaturel<Nat>,SemiAnneauUnitaireEuclidien<Nat>{
    creerNatAvecEtat(etat : EtatNaturelPur) : Nat;
    etat() : EtatNaturelPur;
}

export interface EtatNaturel<T>{
    val(): number;
    estNul(): boolean;
    predecesseur(): EtatNaturelPur;
    taille(): number;
    chiffre(i: number): number;
}

export abstract class EtatNaturelPur implements EtatNaturel<EtatNaturelPur>, FabriqueNat<EtatNaturelPur>{
    
    constructor(){}
    creerZero() : EtatNaturelPur{
        return this.creerNatAvecValeur(0);
    }

    creerSucesseur(predecesseur : EtatNaturelPur) : EtatNaturelPur{
        return this.creerNatAvecValeur(predecesseur.val() +1);
    }

    creerNatAvecValeur(nb : number) : EtatNaturelPur{
        if(nb<0){
            throw "Erreur de valeur";
        }else if(nb==0){
            return new ZeroInductif();
        }else{
            return new IntPositif(nb);
        }
    }

    creerNatAvecRepresentation(val : string) : EtatNaturelPur{
        return this.creerNatAvecValeur(parseInt(val))
    }

    creerSuccesseur(predecesseur: EtatNaturelPur): EtatNaturelPur{
        return this.creerNatAvecValeur(predecesseur.val() + 1);
    }

    abstract val(): number;
    abstract estNul(): boolean;
    abstract predecesseur(): EtatNaturelPur;
    abstract taille(): number;
    abstract chiffre(i: number): number;
    
}