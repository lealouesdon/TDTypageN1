package session2.td.heritage;

import session2.td.naturels.AlgebreNatDecimal;
import session2.td.naturels.Nat;

public class ZeroDecimal extends EtatZero implements AlgebreNatDecimal {

	public ZeroDecimal() { }
	
	public Nat creerZero() {
		return new ZeroParInt();
	}
	
	public Nat creerSuccesseur(Nat predecesseur) {
		return new SuccDecimal(predecesseur);
	}
	
	public String toString() {
		return String.valueOf(super.val());
	}
	
	public boolean equals(Object obj) {
		if (!(obj instanceof Nat))
			return false;
		Nat x = (Nat) obj;
		return this.val() == x.val();
	}
	
	
}
