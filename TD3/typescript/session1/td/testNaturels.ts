import {
    FabriqueNat, Nat
} from "./naturels"

import {
    natParInt
} from "./natParInt"

import {
    zeroSuccRecS, zeroSuccRecZ, zeroSuccS, zeroSuccZ
} from "./natInductif"

import {
    natDecimal
} from "./natDecimal"
import { produitRusse } from "./outils";

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

function tester(fab: FabriqueNat<Nat>): void {
    const zero = fab.creerZero();
    console.log(" 0 ? " + zero.representation());
    console.log(" true ? " + zero.estEgal(zero.zero()));
    const un = fab.creerSuccesseur(zero);
    console.log(" 1 ? " + un.representation());
    console.log(" true ? " + un.estEgal(un.un()));
    const predUn = un.predecesseur();
    console.log(" 0 ? " + predUn.representation());
    const cinq = fab.creerNatAvecValeur(5);
    console.log(" 5 ? " + cinq.representation());
    console.log(" 4 ? " + cinq.predecesseur().representation());
    const six = fab.creerNatAvecValeur(cinq.val() + 1);
    console.log(" 6 ? " + six.representation());
    console.log(" 5 + 6 soit 11 ? " + cinq.somme(six).representation());
    console.log(" 5 * 6 soit 30 ? " + cinq.produit(six).representation());
    const trenteTrois = fab.creerNatAvecValeur(33);
    console.log(" quotient de 33 par 6 soit 5 ? "
        + trenteTrois.div(six).representation());
    console.log(" reste de 33 par 6 soit 3 ? "
        + trenteTrois.modulo(six).representation());
}

function testerProduitRusse(fab: FabriqueNat<Nat>): void {
    const sept = fab.creerNatAvecValeur(7);
    const neuf = fab.creerNatAvecRepresentation("9");
    const dix = fab.creerSuccesseur(neuf);
    console.log("63 ? " + produitRusse(sept, neuf, dix).representation());
}

console.log("*** NatParInt ***")
tester(natParInt)

console.log("*** Zero ***");
tester(zeroSuccZ);

console.log("*** ZeroRec ***");
tester(zeroSuccRecZ);

console.log("*** Succ ***");
tester(zeroSuccS);

console.log("*** SuccRec ***");
tester(zeroSuccRecS);

console.log("*** NatDecimal ***");
tester(natDecimal);

console.log("*** Produit russe ***");
testerProduitRusse(natParInt);
testerProduitRusse(zeroSuccZ);
testerProduitRusse(zeroSuccRecZ);
testerProduitRusse(zeroSuccS);
testerProduitRusse(zeroSuccRecS);
testerProduitRusse(natDecimal);