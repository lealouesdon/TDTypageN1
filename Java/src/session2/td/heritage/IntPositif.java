package session2.td.heritage;

import session2.td.naturels.Nat;

public abstract class IntPositif implements Nat {

	private int nb;
	
	public IntPositif(int nb) {
		if(nb>=0) {
			this.nb = nb;
		}
	}
	
	public int val() {
		return this.nb;
	}
	
	public boolean estNul() {
		return this.val() == 0;
	}
	
	public Nat predecesseur() {
		if(this.nb==0) {
			throw new Error("0 n'a pas de prédecesseur");
		} else {
			return this.creerNatAvecValeur((this.nb -1));
		}
	}
	
	public int chiffre(int i) {
		if(i==0) {
			return this.val()%10;
		} else {
			return this.creerNatAvecValeur(this.val()/10).chiffre(i-1);
		}
	}
	
	public int taille() {
		if(this.val() < 10) {
			return 1;
		} else {
			return this.creerNatAvecValeur(this.val()/10).taille() +1;
		}
	}
	
	public Nat creerSuccesseur(Nat predecesseur) {
		return this.creerNatAvecValeur(predecesseur.val() + 1);
	}
	
	public Nat creerZero() {
		return this.creerNatAvecRepresentation("0");
	}
	
	public Nat creerNatAvecRepresentation(String repDecimal) {
		return this.creerNatAvecValeur(Integer.parseInt(repDecimal));
	}
}
