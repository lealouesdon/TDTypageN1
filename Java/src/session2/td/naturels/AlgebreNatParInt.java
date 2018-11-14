package session2.td.naturels;

public interface AlgebreNatParInt extends Nat{
	
	default public Nat somme(Nat val) {
		return this.creerNatAvecValeur(this.val() + val.val());
	}
	
	default public Nat zero() {
		return this.creerNatAvecValeur(0);
	}
	
	default public Nat produit(Nat val) {
		return this.creerNatAvecValeur(this.val() * val.val());
	}
	
	default public Nat un() {
		return this.creerNatAvecValeur(1);
	}
	
	default public Nat modulo(Nat val) {
		return this.creerNatAvecValeur(this.val() % val.val());
	}
	
	default public Nat div(Nat val) {
		return this.creerNatAvecValeur(this.val() / val.val());
	}
	
	default public boolean estEgal(Object o) {
		if(!(o instanceof Nat)) return false;
		Nat n = (Nat)o;
		return this.toString().equals(n.toString());
	}
	
	default public String representer() {
		return String.valueOf(this.val());
	}
}
