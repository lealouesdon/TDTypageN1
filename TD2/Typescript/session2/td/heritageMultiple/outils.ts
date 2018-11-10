import {
    SemiAnneauUnitaireEuclidien
} from "../../structuresAlgebriques/hierarchie";
import { Identifiable } from "../../bibliotheque/proprietes";

/*
 * Calcul du produit reposant sur l'identité suivante :
 * - x * y = x * (y/base) * base + x * y%base)
 * Elle est valable dans un semi-anneau unitaire euclidien puisque la division euclidienne
 * vérifie :
 * - y = (y/z)*z + y%z.
 * Elle est dite russe lorsque la base vaut deux ; c'est aussi la méthode habituelle
 * de calcul en base 10, lorsqu'on réalise manuellement le calcul.
*/
export function
    produitRusse<T extends SemiAnneauUnitaireEuclidien<T> & Identifiable<T>>(
        x: T, y: T, base: T): T {
    const zero = x.zero();
    let resultat = zero;
    while (!y.estEgal(zero)) {
        const reste = y.modulo(base);
        if (!reste.estEgal(zero)) {
            resultat = resultat.somme(x.produit(reste));
        }
        x = x.produit(base);
        y = y.div(base);
    }
    return resultat;
}

