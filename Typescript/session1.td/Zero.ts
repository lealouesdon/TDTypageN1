import { Nat } from "./Nat";
import { Succ } from "./Succ"
import { NatParInt } from "./NatParInt"
import { FabriqueNat } from "./FabriqueNat"

export class Zero implements Nat{
    public static FAB:FabriqueNat<Nat>=new NatParInt(0);
    estNul(): boolean {
        return true;
    }    
    predecesseur(): Nat {
        throw new Error("Pas de prédecesseur entier naturel à 0.");
    }
    chiffre(value: number): number {
        return 0;
    }
    taille(): number {
        return 1;
    }
    val(): number {
        return 0;
    }
    creerNatAvecValeur(value: number): Nat {
        if(value==0){
            return new Zero();
        } else {
            return NatParInt.FAB.creerNatAvecValeur(value);
        }
    }
    creerZero(): Nat {
        return this;
    }
    creerSuccesseur(nat: Nat): Nat {
        return new Succ(nat);
    }
    creerNatAvecRepresentation(chaine: string): Nat {
        if(Number(chaine)<0){
            throw new Error("Le nombre n'est pas un entier naturel (Zero creeRep)");
        } else {
            return this.creerNatAvecValeur(Number(chaine));
        }
    }
    somme(x: Nat): Nat {
        return this.creerNatAvecValeur(x.val());
    }
    zero(): Nat {
        return this.creerZero();
    }
    produit(x: Nat): Nat {
        return this.creerZero();
    }
    un(): Nat {
        return this.creerNatAvecValeur(1);
    }
    modulo(x: Nat): Nat {
        return this.creerZero();
    }
    div(x: Nat): Nat {
        return this.creerZero();
    }

    equals(x: Nat): boolean {
        return x.val()==0;
    }
    toString():string{
        return String(this.val());
    }


}