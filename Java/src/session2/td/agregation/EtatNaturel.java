package session2.td.agregation;

public interface EtatNaturel<T> {

	boolean estNul();
	T predecesseur();
 	int chiffre(int i);
	int taille();
	int val();
}
