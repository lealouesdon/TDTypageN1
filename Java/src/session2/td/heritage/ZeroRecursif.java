package session2.td.heritage;

import session2.td.naturels.AlgebreNatRecursif;
import session2.td.naturels.Nat;

public class ZeroRecursif extends EtatZero implements AlgebreNatRecursif {

	public ZeroRecursif() { }
	
	public Nat creerZero() {
		return new ZeroParInt();
	}
	
	public Nat creerSuccesseur(Nat predecesseur) {
		return new SuccRecursif(predecesseur);
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
