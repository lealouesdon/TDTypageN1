package session2.td.agregation;

import hierarchie.SemiAnneauUnitaireEuclidien;

public class Outils {
	/*
	 * Calcul du produit reposant sur l'identité suivante :
	 * - x * y = x * (y/base) * base + x * y%base)
	 * Elle est valable dans un semi-anneau unitaire euclidien puisque la division euclidienne
	 * vérifie :
	 * - y = (y/z)*z + y%z.
	 * Elle est dite russe lorsque la base vaut deux ; c'est aussi la méthode habituelle 
	 * de calcul en base 10, lorsqu'on réalise manuellement le calcul.
	 */
	public static <T extends SemiAnneauUnitaireEuclidien<T>> T produitRusse(T x, T y, T base) {
		T zero = x.zero();
		T resultat = zero;

		while (!y.equals(zero)) {
			T reste = y.modulo(base);
			if (!reste.equals(zero)) {
				resultat = resultat.somme(x.produit(reste));
			}
			x = x.produit(base);
			y = y.div(base);

		}
		return resultat;
	}
}
