"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var natParInt_1 = require("./natParInt");
var natInductif_1 = require("./natInductif");
var natDecimal_1 = require("./natDecimal");
var outils_1 = require("./outils");
/*

- Créer l'entier zéro à partir de la fabrique et l'affecter à une variable zero.
- Afficher sa valeur.
- Tester l'égalité entre zero et zero.zero().
- Créer l'entier un à partir de la fabrique creerSuccesseur et l'affecter à une variable un.
- Afficher sa valeur.
- Tester l'égalité entre un et un.un().
- Calculer le prédécesseur de un.
- Créer l'entier 5 à partir de la fabrique et l'affecter à une variable cinq.
- Afficher sa valeur.
- Afficher la valeur du prédécesseur.
- Créer l'entier 6 à partir de la fabrique et l'affecter à une variable six.
- Calculer la somme de 5 et 6 et afficher le résultat.
- Calculer le produit de 5 et 6 et afficher le résultat.
- Calculer le quotient et le reste de la division euclidienne de 33 par 6.
- Calculer la somme de 2_000_000_000 avec lui-même. Rattraper l'exception
possiblement lancée. Voir les tests du paquet session1.demo1 pour un exemple de rattrapage.

*/
function tester(fab) {
    var zero = fab.creerZero();
    console.log(" 0 ? " + zero.representation());
    console.log(" true ? " + zero.estEgal(zero.zero()));
    var un = fab.creerSuccesseur(zero);
    console.log(" 1 ? " + un.representation());
    console.log(" true ? " + un.estEgal(un.un()));
    var predUn = un.predecesseur();
    console.log(" 0 ? " + predUn.representation());
    var cinq = fab.creerNatAvecValeur(5);
    console.log(" 5 ? " + cinq.representation());
    console.log(" 4 ? " + cinq.predecesseur().representation());
    var six = fab.creerNatAvecValeur(cinq.val() + 1);
    console.log(" 6 ? " + six.representation());
    console.log(" 5 + 6 soit 11 ? " + cinq.somme(six).representation());
    console.log(" 5 * 6 soit 30 ? " + cinq.produit(six).representation());
    var trenteTrois = fab.creerNatAvecValeur(33);
    console.log(" quotient de 33 par 6 soit 5 ? "
        + trenteTrois.div(six).representation());
    console.log(" reste de 33 par 6 soit 3 ? "
        + trenteTrois.modulo(six).representation());
}
function testerProduitRusse(fab) {
    var sept = fab.creerNatAvecValeur(7);
    var neuf = fab.creerNatAvecRepresentation("9");
    var dix = fab.creerSuccesseur(neuf);
    console.log("63 ? " + outils_1.produitRusse(sept, neuf, dix).representation());
}
console.log("*** NatParInt ***");
tester(natParInt_1.natParInt);
console.log("*** Zero ***");
tester(natInductif_1.zeroSuccZ);
console.log("*** ZeroRec ***");
tester(natInductif_1.zeroSuccRecZ);
console.log("*** Succ ***");
tester(natInductif_1.zeroSuccS);
console.log("*** SuccRec ***");
tester(natInductif_1.zeroSuccRecS);
console.log("*** NatDecimal ***");
tester(natDecimal_1.natDecimal);
console.log("*** Produit russe ***");
testerProduitRusse(natParInt_1.natParInt);
testerProduitRusse(natInductif_1.zeroSuccZ);
testerProduitRusse(natInductif_1.zeroSuccRecZ);
testerProduitRusse(natInductif_1.zeroSuccS);
testerProduitRusse(natInductif_1.zeroSuccRecS);
testerProduitRusse(natDecimal_1.natDecimal);
//# sourceMappingURL=testNaturels.js.map