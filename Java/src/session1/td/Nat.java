package session1.td;

import hierarchie.SemiAnneauUnitaireEuclidien;

public interface Nat extends FabriqueNat<Nat>, SemiAnneauUnitaireEuclidien<Nat>{
	boolean estNul();
	Nat predecesseur();
	int val();
	int taille();
	int chiffre(int i);
}
