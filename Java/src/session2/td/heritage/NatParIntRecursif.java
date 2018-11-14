package session2.td.heritage;

import session2.td.naturels.AlgebreNatRecursif;
import session2.td.naturels.Nat;

public class NatParIntRecursif extends IntPositif implements AlgebreNatRecursif{
	NatParIntRecursif(int valeur){
		super(valeur);
	}

	@Override
	public boolean estEgal(Object obj) {
		if(!(obj instanceof Nat))
			return false;
		Nat x = (Nat)obj;
		return this.val() == x.val();
	}
	
	public Nat creerNatAvecValeur(int val) {
		return new NatParIntRecursif(val);
	}
	
	public String toString() {
		return Integer.toString(this.val());
	}

	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		return new NatParIntRecursif(predecesseur.val() +1);
	}

//	@Override
//	public String representation() {
//		return this.toString();
//	}
}
