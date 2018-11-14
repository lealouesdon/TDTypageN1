package session2.td.heritage;

import session2.td.naturels.AlgebreNatRecursif;
import session2.td.naturels.Nat;

public class NatDecimalRecursif extends NombreDecimal implements AlgebreNatRecursif {

	private static void nettoyer(StringBuilder s){
		int debut = 0;
		int fin = 0;
		while((fin < s.length()) && Character.getNumericValue(s.charAt(fin)) == 0){
			fin++;
		}
		s.delete(debut, fin);
	}

	NatDecimalRecursif(String nb) {
		super(nb);
	}
	
	public Nat creerNatAvecRepresentation(String repDecimalecimale) {
		StringBuilder repMutable = new StringBuilder(repDecimalecimale);
		nettoyer(repMutable);
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
		return new NatDecimal(repDecimalecimale);
	}
	

	@Override
	public boolean equals(Object obj) {
		if(!(obj instanceof Nat))
			return false;
		Nat x = (Nat)obj;
		return this.val() == x.val();
	}
	
	public String toString() {
		return String.valueOf(super.val());
	}

//	@Override
//	public String representation() {
//		return this.toString();
//	}

}
