package session2.td.heritage;

import session2.td.naturels.AlgebreNatDecimal;
import session2.td.naturels.Nat;

public class SuccDecimal extends EtatSucc implements AlgebreNatDecimal{

	public SuccDecimal(Nat val) {
		super(val);
		// TODO Auto-generated constructor stub
	}
	
	public Nat creerZero() {
		return this.creerNatAvecValeur(0);
	}
	
	public Nat creerSuccesseur(Nat val) {
		return new SuccDecimal(val);
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

//	@Override
//	public String representation() {
//		// TODO Auto-generated method stub
//		return null;
//	}

}
