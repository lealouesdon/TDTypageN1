"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Calcul du produit reposant sur l'identité suivante :
 * - x * y = x * (y/base) * base + x * y%base)
 * Elle est valable dans un semi-anneau unitaire euclidien puisque la division euclidienne
 * vérifie :
 * - y = (y/z)*z + y%z.
 * Elle est dite russe lorsque la base vaut deux ; c'est aussi la méthode habituelle
 * de calcul en base 10, lorsqu'on réalise manuellement le calcul.
*/
function produitRusse(x, y, base) {
    var zero = x.zero();
    var resultat = zero;
    while (!y.estEgal(zero)) {
        var reste = y.modulo(base);
        if (!reste.estEgal(zero)) {
            resultat = resultat.somme(x.produit(reste));
        }
        x = x.produit(base);
        y = y.div(base);
    }
    return resultat;
}
exports.produitRusse = produitRusse;
//# sourceMappingURL=outils.js.map