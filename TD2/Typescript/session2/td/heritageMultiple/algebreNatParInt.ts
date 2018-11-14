import {
    Nat
} from "./naturels";

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