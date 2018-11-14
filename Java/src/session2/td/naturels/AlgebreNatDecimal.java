package session2.td.naturels;

public interface AlgebreNatDecimal extends Nat {
	
	
	default public Nat somme(Nat val) {
		int taille = this.taille() < val.taille() ? val.taille() : this.taille();
		StringBuilder rep = new StringBuilder();
		int retenue = 0;
		for(int i = 0; i < taille; i++){
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
	
	default public Nat zero() {
		return this.creerNatAvecRepresentation("0");
	}
	
	default public Nat produit(Nat val) {
		Nat res = zero();
		Nat index = zero();
		while(!index.equals(val)){
			res = res.somme(this);
			index = this.creerSuccesseur(index);
		}
		return res;
	}
	
	default public Nat un() {
		return this.creerNatAvecRepresentation("1");
	}
	
	default public Nat modulo(Nat val) {
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
	
	default public Nat div(Nat val) {
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
	
	default public String representer() {
		return String.valueOf(this.val());
	}
	
	
	default public boolean estEgal(Object o) {
		if(!(o instanceof Nat)) return false;
		Nat n = (Nat)o;
		return this.toString().equals(n.toString());
	}
	
	
}
