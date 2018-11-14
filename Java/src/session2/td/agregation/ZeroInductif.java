package session2.td.agregation;

public class ZeroInductif implements NaturelInductif {
	
	public ZeroInductif() {	}
	
	public int val() {
		return 0;
	}
	
	public boolean estNul() {
		return true;
	}
	
	public EtatNaturelPur predecesseur() {
		throw new UnsupportedOperationException("Pas de prédécesseur.");
	}
	
	public int chiffre(int i) {
		return 0;
	}
	
	public int taille() {
		return 1;
	}
	
	public String toString() {
		return String.valueOf(this.val());
	}
	
	public boolean equals(Object obj) {
		if (!(obj instanceof Nat))
			return false;
		EtatNaturelPur x = (EtatNaturelPur) obj;
		return this.val() == x.val();
	}

}
