package session2.td.heritage;

import session2.td.naturels.Nat;
import session2.td.naturels.AlgebreNatParInt;

public class NatDecimalParInt extends NombreDecimal implements AlgebreNatParInt {
	
	public NatDecimalParInt(String rep) {
		super(rep);
	}

	public Nat creerNatAvecRepresentation(String repDecimalecimale) {
		StringBuilder repMutable = new StringBuilder(repDecimalecimale);
		repDecimalecimale = new String(repMutable);
		if(repDecimalecimale.equals("")){
			repDecimalecimale = "0";
		}
		char min = Character.forDigit(0, 10);
		char max = Character.forDigit(9, 10);
		for(int i = 0; i < repDecimalecimale.length(); i++){
			char c = repDecimalecimale.charAt(i);
			if(c < min)	throw new IllegalArgumentException();
			if(c > max) throw new IllegalArgumentException();
		}
		return new NatDecimalParInt(repDecimalecimale);
	}

    public String toString() {
    	return String.valueOf(super.val());
    }

    public boolean equals(Object obj) {
		if(!(obj instanceof Nat))
			return false;
		Nat x = (Nat)obj;
		return super.val() == x.val();
}

//	@Override
//	public String representation() {
//		return this.toString();
//	}

}
