package session2.td.agregation;

public class SuccInductif implements NaturelInductif {

	private EtatNaturelPur predecesseur;
	
	public SuccInductif(EtatNaturelPur predecesseur) {
		this.predecesseur = predecesseur;
	}
	
	public int val() {
		return this.predecesseur.val() + 1;
	}
	
	public boolean estNul() {
		return this.val() == 0;
	}
	
	public EtatNaturelPur predecesseur() {
		if(this.estNul())
			throw new UnsupportedOperationException("Pas de prédécesseur.");
		return this.creerNatAvecValeur(this.val() - 1);
	}
	
	public int chiffre(int i) {
		return (i == 0) ? this.val()%10 : (this.creerNatAvecValeur(this.val()/10)).chiffre(i-1);
	}
	
	public int taille() {
		return (this.val() < 10) ? 1 : 1 + (this.creerNatAvecValeur(this.val() / 10)).taille();
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
