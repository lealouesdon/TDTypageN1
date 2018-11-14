package session2.td.agregation;

import session2.td.naturels.*;

public interface EtatNaturelPur extends EtatNaturel<EtatNaturelPur>, FabriqueNaturels<EtatNaturelPur> {
	
	default EtatNaturelPur creerZero() {
		return this.creerNatAvecValeur(0);
	}
	
	default EtatNaturelPur creerSuccesseur(EtatNaturelPur val) {
		return this.creerNatAvecValeur(val.val() + 1);
	}
	
	@Override
	default EtatNaturelPur creerNatAvecValeur(int val) {
		if (val < 0) {
			throw new UnsupportedOperationException();
		}else if (val == 0) {
			return new ZeroInductif();
		} else {
			return new IntPositif(val);		
		}
	}
	
	@Override
	default EtatNaturelPur creerNatAvecRepresentation(String repDecimal) {
		StringBuilder repMutable = new StringBuilder(repDecimal);
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
		return this.creerNatAvecValeur(Integer.parseInt(repDecimal));
	}
}
