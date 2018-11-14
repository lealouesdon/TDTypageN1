package session2.td.agregation;

public class NatCalculantAvecDesNombresDecimaux extends NatDeleguantEtat {

	public NatCalculantAvecDesNombresDecimaux(EtatNaturelPur val) {
		super(val);
	}
	
	public Nat creerNatAvecEtat(EtatNaturelPur val) {
		return new NatCalculantAvecDesNombresDecimaux(val);
	}
	
	public Nat somme(Nat val) {
		int t = this.taille() < val.taille() ? val.taille() : this.taille();
		StringBuilder rep = new StringBuilder();
		int retenue = 0;
		for(int i = 0; i < t; i++){
			int chiffre = this.chiffre(i) + val.chiffre(i) + retenue;
			if(chiffre > 9){
				chiffre = chiffre - 10;
				retenue = 1;
			}else{
				retenue = 0;
			}
			rep.append(Integer.toString(chiffre));
		}
		rep = retenue == 0 ? rep : rep.append(1);
		return this.creerNatAvecRepresentation(rep.reverse().toString());
	}
	
	public Nat zero() {
		return this.creerNatAvecRepresentation("0");
	}
	
	public Nat produit(Nat val) {
		Nat res = zero();
		Nat index = zero();
		while(!index.equals(val)){
			res = res.somme(this);
			index = this.creerSuccesseur(index);
		}
		return res;
	}
	
	public Nat un() {
		return this.creerNatAvecRepresentation("1");
	}
	
	public Nat modulo(Nat val) {
		Nat courant = zero();
		Nat r = zero();
		while(!courant.equals(this)){
			r = this.creerSuccesseur(r);
			if(r.equals(val)){
				r = zero();
			}
			courant = this.creerSuccesseur(courant);
		}
		return r;
	}
	
	public Nat div(Nat val) {
		Nat courant = zero();
		Nat q = zero();
		Nat r = zero();
		while(!courant.equals(this)){
			r = this.creerSuccesseur(r);
			if(r.equals(val)){
				r = zero();
				q = this.creerSuccesseur(q);
			}
			courant = this.creerSuccesseur(courant);
		}
		return q;
	}
	
	public String toString() {
		return String.valueOf(this.val());
	}
	
	public boolean equals(Object obj) {
		if(!(obj instanceof Nat))
			return false;
		Nat x = (Nat)obj;
		return this.val() == x.val();
	}
}
