package session2.td.heritage;

import session2.td.naturels.AlgebreNatParInt;
import session2.td.naturels.Nat;

public class NatParInt extends IntPositif implements AlgebreNatParInt {
	
	public NatParInt(int val) {
		super(val);
	}
	
	public Nat creerNatAvecValeur(int val) {
		if(val==0) {
			return this.creerZero();
		} else {
			return new NatParInt(val);
		}
	}
	
	public String toString() {
		return Integer.toString(this.val());
	}


	public boolean equals(Object obj) {
		if(!(obj instanceof Nat))
			return false;
		Nat x = (Nat)obj;
		return this.val() == x.val();
	}

	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		return new NatParInt(predecesseur.val() +1);
	}

//	@Override
//	public String representation() {
//		return this.toString();
//	}
//	
}

