"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var natDeleguantEtat_1 = require("./natDeleguantEtat");
function testerNat(fab) {
    var zero = fab.creerZero();
    console.log(" 0 ? " + zero.toString());
    //console.log(" true ? " + zero.estEgal(zero.zero()));
    var un = fab.creerSuccesseur(zero);
    console.log(" 1 ? " + un.toString());
    //console.log(" true ? " + un.estEgal(un.un()));
    var predUn = un.predecesseur();
    console.log(" 0 ? " + predUn.toString());
    var cinq = fab.creerNatAvecValeur(5);
    console.log(" 5 ? " + cinq.toString());
    console.log(" 4 ? " + cinq.predecesseur().toString());
    var six = fab.creerNatAvecValeur(cinq.val() + 1);
    console.log(" 6 ? " + six.toString());
    console.log(" 5 + 6 soit 11 ? " + cinq.somme(six).toString());
    console.log(" 5 * 6 soit 30 ? " + cinq.produit(six).toString());
    var trenteTrois = fab.creerNatAvecValeur(33);
    console.log(" quotient de 33 par 6 soit 5 ? "
        + trenteTrois.div(six).toString());
    console.log(" reste de 33 par 6 soit 3 ? "
        + trenteTrois.modulo(six).toString());
}
console.log("*** NatCalculantAvecDesNombresDecimaux ***");
testerNat(natDeleguantEtat_1.NatCalculantAvecDesNombresDecimauxZ);
console.log("*** NatCalculantAvecDesInts ***");
testerNat(natDeleguantEtat_1.NatCalculantAvecDesIntsZ);
//# sourceMappingURL=testNaturels.js.map