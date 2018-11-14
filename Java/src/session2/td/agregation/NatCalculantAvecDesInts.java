package session2.td.agregation;

public class NatCalculantAvecDesInts extends NatDeleguantEtat {

	public NatCalculantAvecDesInts(EtatNaturelPur val) {
		super(val);
	}
	
	public Nat creerNatAvecEtat(EtatNaturelPur val) {
		return new NatCalculantAvecDesNombresDecimaux(val);
	}
	
	public Nat un() {
		return this.creerNatAvecValeur(1);
	}
	
	public Nat modulo(Nat val) {
		return this.creerNatAvecValeur(this.val() % val.val());
	}
	
	public Nat div(Nat val) {
		return this.creerNatAvecValeur(this.val() / val.val());
	}
	
	public Nat somme(Nat val) {
		System.out.println("Passe ici");
		return this.creerNatAvecValeur(this.val() + val.val());
	}
	
	public Nat zero() {
		return this.creerNatAvecValeur(0);
	}
	
	public Nat produit(Nat val) {
		return this.creerNatAvecValeur(this.val() * val.val());
	}
	
	public String toString() {
		return String.valueOf(this.val());
	}
	
	public boolean equals(Object obj) {
		if(!(obj instanceof Nat))
			return false;
		Nat x = (Nat)obj;
		return this.val() == x.val();
	}
}
