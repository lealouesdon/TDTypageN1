package hierarchie;

import session1.td.Nat;

public interface SemiAnneauUnitaireEuclidien<T> extends SemiAnneau<T>, MonoideMultiplicatif<T>, BiUnifere<T>, Euclidien<T> {
	T somme(Nat n);
	T zero();
	T produit(Nat n);
	T un();
	T modulo(Nat x);
	T div(Nat x);
}
