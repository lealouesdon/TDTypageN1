import { Zero } from "../Zeroion1.td/Zero";
import { Nat } from "./session1.td/Natt";

export class ZeroRec extends Zero{
    constructor(){
        super();
    }

    somme(n:Nat):Nat{
        return n;
    }

    produit(n:Nat):Nat{
        return this.creerZero();
    }

    equals(o:Object):boolean{
        return (o as Nat).val()==0;
    }

    div(n:Nat):Nat{
        if(n.val()!=0){
            return this.creerZero();
        } else {
            throw new Error("Division par zero");
        }
    }
    modulo(n:Nat):Nat{
        if(n.val()!=0){
            return this.creerZero();
        } else {
            throw new Error("Division par zero");
        }
    }
}