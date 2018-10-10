import { NatParInt } from "./NatParInt";
import { Zero } from "./Zero";
import { ZeroRec } from "./ZeroRec";
import { Succ } from "./Succ";
import { SuccRec } from "./SuccRec";
import { FabriqueNat } from "./FabriqueNat";
import { Nat } from "./Nat";


function test(fab:FabriqueNat<Nat>){
    var deux:Nat;
    deux = fab.creerNatAvecValeur(4);

    console.log(deux.val().toString());
}

test(NatParInt.FAB);

function test1(fab:FabriqueNat<Nat>){
    var zero= fab.creerZero();
    console.log("0 ? " + zero.val().toString());
    console.log("0 = 0 ?" + (zero as NatParInt).equals(new NatParInt(0)));

    var un = fab.creerSuccesseur(zero);
    console.log("1 ? " + un.val().toString());
    console.log("1 = 1 ?" + (un as NatParInt).equals(new NatParInt(1)));
    console.log("Predecesseur de 1? " + un.predecesseur().toString());


    var cinq = fab.creerNatAvecValeur(5);

    console.log("5 ? " + cinq);
    console.log("predecesseur de 5 ? "+ cinq.predecesseur());
    var six = fab.creerNatAvecValeur(6);
    console.log("5 + 5 ? "+ cinq.somme(six));
    console.log("5 * 6 ? "+ cinq.produit(six));
    
    var ope = fab.creerNatAvecValeur(33);
    console.log("33 / 6 quotien ? "+ ope.div(six) + " -------- 33 mod 6 ? " + ope.modulo(six));
    var grand = fab.creerNatAvecValeur(2000000000);
    console.log("2000000000 + 2000000000 ? "+grand.somme(grand));

    
}

test1(new NatParInt(2));
console.log("/******************************************/")
console.log("******************************************")
console.log("******************************************")
console.log("******************************************")
console.log("/******************************************/")
test1(new Zero());
console.log("/******************************************/")
console.log("******************************************")
console.log("******************************************")
console.log("******************************************")
console.log("/******************************************/")
test1(new Succ(new NatParInt(1)));
console.log("/******************************************/")
console.log("******************************************")
console.log("******************************************")
console.log("******************************************")
console.log("/******************************************/")
test1(new ZeroRec());
console.log("/******************************************/")
console.log("******************************************")
console.log("******************************************")
console.log("******************************************")
console.log("/******************************************/")
test1(new SuccRec(new NatParInt(4)));