package session2.td.heritage;

import session2.td.naturels.AlgebreNatDecimal;
import session2.td.naturels.Nat;

public class NatDecimal extends NombreDecimal implements AlgebreNatDecimal {

	private static void nettoyer(StringBuilder s){
		int debut = 0;
		int fin = 0;
		while((fin < s.length()) && Character.getNumericValue(s.charAt(fin)) == 0){
			fin++;
		}
		s.delete(debut, fin);
	}
	
	NatDecimal(String nb) {
		super(nb);
	}

	@Override
	
	public String toString() {
    	return String.valueOf(super.val());
	}
	
	public Nat creerNatAvecRepresentation(String repDecimal) {
		StringBuilder repMutable = new StringBuilder(repDecimal);
		nettoyer(repMutable);
		repDecimal = new String(repMutable);
		if(repDecimal.equals("")){
			repDecimal = "0";
		}
		char min = Character.forDigit(0, 10);
		char max = Character.forDigit(9, 10);
		for(int i = 0; i < repDecimal.length(); i++){
			char c = repDecimal.charAt(i);
			if(c < min)	throw new IllegalArgumentException();
			if(c > max) throw new IllegalArgumentException();
		}
		return new NatDecimal(repDecimal);
}

//	@Override
//	public String representation() {
//		return this.toString();
//	}

	
}
