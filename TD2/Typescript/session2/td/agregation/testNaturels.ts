import {
    FabriqueNat, Nat
} from "./naturels"

import {
    NatCalculantAvecDesNombresDecimauxZ,NatCalculantAvecDesIntsZ
} from "./natDeleguantEtat"

function testerNat(fab: FabriqueNat<Nat>): void {
    const zero = fab.creerZero();
    console.log(" 0 ? " + zero.toString());
    //console.log(" true ? " + zero.estEgal(zero.zero()));
    const un = fab.creerSuccesseur(zero);
    console.log(" 1 ? " + un.toString());
    //console.log(" true ? " + un.estEgal(un.un()));
    const predUn = un.predecesseur();
    console.log(" 0 ? " + predUn.toString());
    const cinq = fab.creerNatAvecValeur(5);
    console.log(" 5 ? " + cinq.toString());
    console.log(" 4 ? " + cinq.predecesseur().toString());
    const six = fab.creerNatAvecValeur(cinq.val() + 1);
    console.log(" 6 ? " + six.toString());
    console.log(" 5 + 6 soit 11 ? " + cinq.somme(six).toString());
    console.log(" 5 * 6 soit 30 ? " + cinq.produit(six).toString());
    const trenteTrois = fab.creerNatAvecValeur(33);
    console.log(" quotient de 33 par 6 soit 5 ? "
        + trenteTrois.div(six).toString());
    console.log(" reste de 33 par 6 soit 3 ? "
        + trenteTrois.modulo(six).toString());
}

console.log("*** NatCalculantAvecDesNombresDecimaux ***")
testerNat(NatCalculantAvecDesNombresDecimauxZ);

console.log("*** NatCalculantAvecDesInts ***");
testerNat(NatCalculantAvecDesIntsZ);


