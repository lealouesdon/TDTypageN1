package session1.td;

public interface FabriqueNat<T>{
	T creerNatAvecValeur(int x);
	T creerZero();
	T creerSuccesseur(T predecesseur);
	
}
