import {
    FabriqueNat, Nat
} from "./naturels"

import {
    NatCalculantAvecDesNombresDecimauxZ,NatCalculantAvecDesIntsZ
} from "./natDeleguantEtat"

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

console.log("*** NatParInt ***")
testerNat(NatCalculantAvecDesNombresDecimauxZ)

console.log("*** Zero ***");
testerNat(NatCalculantAvecDesIntsZ);


