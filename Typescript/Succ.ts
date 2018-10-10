import { Nat } from "./session1.td/Natt";
import { Zero } from "./session1.td/Zeroo";
import { FabriqueNat } from "../FabriqueNat/FabriqueNat"
import { NatParInt } from "../NatParInttd/NatParInt"


export class Succ implements Nat {
    public static FAB:FabriqueNat<Nat>=new NatParInt(0);
    public constructor(private pred:Nat){
        this.pred=pred;
    }
    estNul(): boolean {
        return false;
    }
    predecesseur(): Nat {
        console.log("Valeur actuelle avant return : "+ this.val());
        return this.pred;
    }
    chiffre(value: number): number {
        return Number(String(this.val()).charAt(value));
    }
    taille(): number {
        return String(this.val()).length
    }
    val(): number {
        return this.pred.val() + 1;
    }
    creerNatAvecValeur(value: number): Nat {
        // return this.creerSuccesseur(this.creerNatAvecValeur(value-1));
        if(value==0){
            return new Zero();
        } else {
            return NatParInt.FAB.creerNatAvecValeur(value);
        }
    }
    creerZero(): Nat {
        return this.creerNatAvecValeur(0);
    }
    creerSuccesseur(nat: Nat): Nat {
        return new Succ(nat);
    }
    creerNatAvecRepresentation(chaine: string): Nat {
        if(Number(chaine)<0){
            throw new Error("Le nombre n'est pas un entier naturel (Succ repre)");
        } else {
            return this.creerNatAvecValeur(Number(chaine));
        }
    }
    somme(x: Nat): Nat {
        console.log("Passe par somme de succ");
        console.log("Valeur de this.val() : " + this.val().toString());
        console.log("Valeur de x.val() : " + x.val().toString());
        return this.creerNatAvecValeur(this.val()+x.val());
    }
    zero(): Nat {
        return this.creerZero();
    }
    produit(x: Nat): Nat {
        return this.creerNatAvecValeur(this.val()*x.val());
    }
    un(): Nat {
        return this.creerNatAvecValeur(1);
    }
    modulo(x: Nat): Nat {
        return this.creerNatAvecValeur(this.val()%x.val());
    }
    div(x: Nat): Nat {
        return this.creerNatAvecValeur(this.val()/x.val());
    }

    equals(nat : Nat): boolean {
        if(nat.val() == this.val()){
            return true;
        } else {
            return false;
        }
    }

    toString():string{
        return String(this.val());
    }

}