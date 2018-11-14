import {
    Nat
} from "./naturels";

import{
    AlgebreNatRecursifSuccesseur
}from "./algebreNatRecursifSuccesseur"

import{
    AlgebreNatRecursifZero
}from "./algebreNatRecursifZero"

export interface AlgebreNatRecursif extends AlgebreNatRecursifSuccesseur,AlgebreNatRecursifZero{
    somme(nb : Nat) : Nat;
    zero() : Nat;
    produit(nb : Nat) : Nat;
    un() : Nat;
    modulo(nb : Nat) : Nat;
    div(nb : Nat) : Nat;
    estEgal(obj : Object) : boolean;
    representation() : string;
}