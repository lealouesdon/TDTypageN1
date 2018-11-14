package session2.td.heritage;

import session2.td.naturels.Nat;
import session2.td.naturels.NatInductifInt;

public abstract class EtatSucc implements NatInductifInt  {

	private Nat predecesseur;
	
	public EtatSucc(Nat val) {
		this.predecesseur = val;
	}
	
	public int val() {
		return this.predecesseur.val() +1;
	}
	
	public boolean estNul() {
		return this.val() == 0;
	}
	
	public Nat predecesseur() {
		if(this.estNul())
			throw new UnsupportedOperationException("0 n'a pas de prédécesseur.");
		return this.creerNatAvecValeur(this.val() - 1);
	}
	
	public int chiffre(int i) {
		if(i==0) {
			return this.val()%10;
		} else {
			return this.creerNatAvecValeur(this.val()/10).chiffre(i-1);
		}
	}
	
	public int taille() {
		if(this.val()<10) {
			return 1;
		} else {
			return this.creerNatAvecValeur(this.val()/10).taille();
		}
	}
}
