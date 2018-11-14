package session2.td.naturels;

public interface AlgebreNatRecursifSuccesseur extends Nat {
	
	default public Nat somme(Nat val) {
		return this.creerSuccesseur(this.predecesseur().somme(val));
	}
	
	default public Nat zero() {
		return this.creerZero();
	}
	
	default public Nat produit(Nat val) {
		return val.somme(this.predecesseur().produit(val));
	}
	
	default Nat un() {
		return this.creerNatAvecValeur(1);
	}
	
	default public Nat modulo(Nat val) {
		Nat nat = this.predecesseur().modulo(val);
		return this.creerSuccesseur(nat).equals(val) ? this.creerZero() : this.creerSuccesseur(nat);
	}
	
	default public Nat div(Nat val) {
		Nat nat1 = this.predecesseur().modulo(val);
		Nat nat2 = this.predecesseur().div(val);
		return this.creerSuccesseur(nat1).equals(val) ? this.creerSuccesseur(nat2) : nat2;
	}
	
	default public boolean estEgal(Object o) {
		if(!(o instanceof Nat))
			return false;
		Nat x = (Nat)o;
		if(x.estNul())
			return false;
		return this.predecesseur().equals(x.predecesseur());
	}
}