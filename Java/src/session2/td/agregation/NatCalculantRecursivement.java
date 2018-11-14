package session2.td.agregation;

public class NatCalculantRecursivement extends NatDeleguantEtat {
	
	public NatCalculantRecursivement(EtatNaturelPur val) {
		super(val);
	}
	
	public Nat creerNatAvecEtat(EtatNaturelPur val) {
		return new NatCalculantAvecDesNombresDecimaux(val);
	}

	public Nat somme(Nat val) {
		if(this.estNul()) { 
			return val;
		}
		System.out.println("Predecesseur : "+ this.predecesseur());
		return this.creerSuccesseur(this.predecesseur().somme(val));
	}
	
	public Nat zero() {
		return this.creerZero();
	}
	
	public Nat produit(Nat val) {
		if(this.estNul()) { 
			return this.creerZero();
		}
		return val.somme(this.predecesseur().produit(val));
	}
	
	public Nat un() {
		return this.creerNatAvecValeur(1);
	}
	
	public Nat modulo(Nat val) {
		if(this.estNul()) { 
			return this.creerZero();
		}
		Nat r = this.predecesseur().modulo(val);
		return this.creerSuccesseur(r).equals(val) ? this.creerZero() : this.creerSuccesseur(r);
	}
	
	public Nat div(Nat val) {
		if(this.estNul()) { 
			return this.creerZero();
		}
		Nat r = this.predecesseur().modulo(val);
		Nat q = this.predecesseur().div(val);
		return this.creerSuccesseur(r).equals(val) ? this.creerSuccesseur(q) : q;
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
