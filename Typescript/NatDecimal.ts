import { Nat } from "./session1.td/Natt";
import { FabriqueNat } from "../FabriqueNat/FabriqueNat";
import { Zero } from "./session1.td/Zeroo";

export class NatDecimal implements Nat {
    private DIX:Nat;
    public static FAB:FabriqueNat<Nat> = new NatDecimal("");
    constructor(private chiffres:string){
        if(Number(chiffres)>=0){
            this.chiffres = chiffres;
        } else {
            throw new Error("Le nombre n'est pas un entier naturel");
        }
    }
    estNul(): boolean {
        return this.val()==0;
    }
    predecesseur(): Nat {
        return this.creerNatAvecValeur(this.val()-1);
    }
    chiffre(value: number): number {
        return Number(String(this.val()).charAt(value));
    }
    taille(): number {
        return String(this.val()).length;
    }
    val(): number {
        return Number(this.chiffres);
    }
    creerNatAvecValeur(value: number): Nat {
        if(value==0){
            return new Zero();
        } else if (value>0){
            return new NatDecimal(String(value));
        } else {
            throw new Error("Le nombre n'est pas un entier naturel");
        }
    }
    creerZero(): Nat {
        return this.creerNatAvecValeur(0);
    }
    creerSuccesseur(nat: Nat): Nat {
        return this.creerNatAvecValeur(this.val()+1)
    }
    creerNatAvecRepresentation(chaine: string): Nat {
        if(Number(chaine)<0){
            throw new Error("Le nombre n'est pas un entier naturel");
        } else {
            return this.creerNatAvecValeur(Number(chaine));
        }
    }
    somme(x: Nat): Nat {
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
        if(this.val()==0){
            throw new Error("Division par 0");
        } else {
            return this.creerNatAvecValeur(this.val()%x.val());
        }
    }
    div(x: Nat): Nat {
        if(this.val()==0){
            throw new Error("Division par 0");
        } else {
            return this.creerNatAvecValeur(this.val()/x.val());
        }
    }

    toString(): string {
        return String(this.val());
    }  

    equals(nat : Nat): boolean {
        if(nat.val() == this.val()){
            return true;
        } else {
            return false;
        }
    }


}