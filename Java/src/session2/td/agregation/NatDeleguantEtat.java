package session2.td.agregation;

public abstract class NatDeleguantEtat implements Nat {

	private EtatNaturelPur etat;

	public NatDeleguantEtat(EtatNaturelPur etat) {
		this.etat = etat;
	}

	public EtatNaturelPur etat() {
		return this.etat;
	}

	public int val() {
		return this.etat.val();
	}

	public boolean estNul() {
		return this.val() == 0;
	}

	public Nat predecesseur() {
		if (this.estNul())
			throw new UnsupportedOperationException("Pas de prédécesseur.");
		return this.creerNatAvecValeur(this.val() - 1);
	}

	public int chiffre(int i) {
		return (i == 0) ? this.val() % 10 : (this.creerNatAvecValeur(this.val() / 10)).chiffre(i - 1);
	}

	public int taille() {
		return (this.val() < 10) ? 1 : 1 + (this.creerNatAvecValeur(this.val() / 10)).taille();
	}

	public Nat creerNatAvecValeur(int val) {
		return this.creerNatAvecEtat(this.etat.creerNatAvecValeur(val));
	}

	public Nat creerZero() {
		return this.creerNatAvecEtat(this.etat.creerZero());
	}

	public Nat creerSuccesseur(Nat val) {
		return this.creerNatAvecValeur(val.val() + 1);
	}

	public Nat creerNatAvecRepresentation(String repDecimal) {
		StringBuilder repMutable = new StringBuilder(repDecimal);
		repDecimal = new String(repMutable);
		if(repDecimal.equals("")){
			repDecimal = "0";
		}
		char min = Character.forDigit(0, 10);
		char max = Character.forDigit(9, 10);
		for(int i = 0; i < repDecimal.length(); i++){
			char c = repDecimal.charAt(i);
			if(c < min)	throw new IllegalArgumentException();
			if(c > max) throw new IllegalArgumentException();
		}
		return this.creerNatAvecValeur(Integer.parseInt(repDecimal));
	}
}
