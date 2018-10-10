import { SemiAnneauUnitaireEuclidien } from "../../../Documents/Typage_Modularite/TD1_TypeScript/Workspace_Visual/session1.td/hierarchie/SemiAnneauUnitaireEuclidien";
import { FabriqueNat } from "../FabriqueNat/FabriqueNat";

export interface Nat extends FabriqueNat<Nat>, SemiAnneauUnitaireEuclidien<Nat>{
    estNul() : boolean;

    predecesseur() : Nat;

    chiffre(value : number) : number;

    taille() : number;

    val() : number;
}