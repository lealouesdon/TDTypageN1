package session2.td.heritage;

import session2.td.naturels.Nat;
import session2.td.naturels.NatInductifInt;

public abstract class EtatZero implements NatInductifInt {
	public EtatZero() {}
	
	public int val() {
		return 0;
	}
	
	public boolean estNul() {
		return true;
	}
	
	public Nat predecesseur() {
		throw new Error("0 n'a pas de prédécesseur.");
	}
	
	public int chiffre(int i) {
		return 0;
	}
	
	public int taille() {
		return 1;
	}
}
