package session2.td.naturels;

public interface FabriqueNaturels<T> {
	T creerNatAvecValeur(int val);
	T creerZero();
	T creerSuccesseur(T predecesseur);
	T creerNatAvecRepresentation(String repDecimale);
}
