package session2.td.heritage;

import session2.td.naturels.AlgebreNatDecimal;
import session2.td.naturels.Nat;

public class NatParIntDecimal extends IntPositif implements AlgebreNatDecimal {
	NatParIntDecimal(int valeur){
		super(valeur);
	}

	@Override
	public boolean equals(Object obj) {
		if(!(obj instanceof Nat))
			return false;
		Nat x = (Nat)obj;
		return this.val() == x.val();
	}
	
	public String toString() {
		return Integer.toString(this.val());
	}

	@Override
	public Nat creerNatAvecValeur(int val) {
		return new NatParIntDecimal(val);
	}

//	@Override
//	public String representation() {
//		return this.toString();
//	}
//	
}
