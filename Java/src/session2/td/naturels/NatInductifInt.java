package session2.td.naturels;

public interface NatInductifInt extends Nat {
	
	default public Nat creerNatAvecValeur(int i) {
		if(i==0) {
			return this.creerZero();
		} else {
			return this.creerSuccesseur(this.creerNatAvecValeur(i -1));
		}
	}
	
	default public Nat creerNatAvecRepresentation(String repDecimale) {
		return this.creerNatAvecValeur(Integer.parseInt(repDecimale));
	}
	
}
	