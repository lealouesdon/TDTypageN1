package session2.td.naturels;

public interface AlgebreNatRecursifZero extends Nat {
	
	default public Nat somme(Nat val) {
		return val;
	}
	
	default public Nat zero() {
		return this.creerZero();
	}
	
	default public Nat produit(Nat val) {
		return this.zero();
	}
	
	default Nat un() {
		return this.creerSuccesseur(this.creerZero());
	}
	
	default public Nat modulo(Nat val) {
		return this.zero();
	}
	
	default public Nat div(Nat val) {
		return this.zero();
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
