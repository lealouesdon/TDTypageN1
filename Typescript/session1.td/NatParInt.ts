import { Nat } from "./Nat";
import { FabriqueNat } from "./FabriqueNat";

export class NatParInt implements Nat{
    public static FAB:FabriqueNat<Nat>=new NatParInt(0);

    constructor(private value:number){
        if(value>=0){
            this.value=value;
        } else {
            throw new Error("Le nombre n'est pas un entier naturel");
        }
    }

    getVal(): number {
        return this.value;
    }
    estNul(): boolean {
        if(this.val()==0){
            return true;
        } else if (this.val()>0){
            return false;
        } else {
            throw new Error("Le nombre n'est pas un entier naturel");
        }
    }    
    predecesseur(): Nat {
        if(this.estNul()){
            throw new Error("Le predecesseur n'est pas un entier naturel");
        } else {
            return new NatParInt(this.val()-1);
        }
    }
    chiffre(value: number): number {
        var s = String(this.val());
        return Number(String(s.charAt(value)));
    }
    taille(): number {
        return String(this.val()).length;
    }
    val(): number {
        return this.getVal();
    }
    creerNatAvecValeur(value: number): NatParInt {
        if (value<0){
            throw new Error("Le nombre n'est pas un entier naturel");
        } else {
            return new NatParInt(value);
        }
    }
    creerZero(): Nat {
        return new NatParInt(0);
    }
    creerSuccesseur(nat: Nat): Nat {
        return new NatParInt(nat.val()+1);
    }
    creerNatAvecRepresentation(chaine: string): Nat {
        if(Number(chaine)<0){
            throw new Error("Le nombre n'est pas un entier naturel");
        } else {
            return this.creerNatAvecValeur(Number(chaine));
        }
    }
    somme(x: Nat): NatParInt {
        return new NatParInt(this.val() + x.val());
    }
    zero(): Nat {
        return this.creerZero();
    }
    produit(x: Nat): Nat {
        return new NatParInt(this.val()*x.val());
    }
    un(): Nat {
        return this.creerNatAvecValeur(1);
    }
    modulo(x: Nat): Nat {
        if(x.val()!=0){
            return new NatParInt(this.val() % x.val())
        } else {
            throw new Error("Division par zéro");
        }
    }
    div(x: Nat): Nat {
        if(x.val()!=0){
            return new NatParInt(this.val() / x.val());
        } else {
            throw new Error("Divison par zéro");
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