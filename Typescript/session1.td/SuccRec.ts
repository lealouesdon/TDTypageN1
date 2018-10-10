import { Nat } from "./Nat";
import { Succ } from "./Succ";

export class SuccRec extends Succ{
    constructor(predecesseur:Nat){
        super(predecesseur);
    }

    somme(n:Nat):Nat{
        return this.creerSuccesseur(this.predecesseur().somme(n));
    }

    produit(n:Nat):Nat{
        return n.somme(this.predecesseur().produit(n));
    }

    equals(o:Object):boolean{
        if((o as Nat).estNul()){
            return false;
        } else {
            return (this.predecesseur() as SuccRec).equals((o as Nat).predecesseur);
        }
    }

    div(n:Nat):Nat{
        if(n.val()==0){
            throw new Error("Division par zéro");
        } else if(this.val()-n.val()==0){
            return this.creerNatAvecValeur(1);
        } else if (this.val() < n.val()){
            return this.creerNatAvecValeur(0);
        } else {
            return this.creerNatAvecValeur(1+this.creerNatAvecValeur(this.val()-n.val()).div(n).val());
        }
    }

    modulo(n:Nat):Nat{
        if(n.val()==0){
            throw new Error("Divison par zéro");
        } else {
            return this.creerNatAvecValeur(this.val()-n.val()).modulo(n);
        }
    }

}