package session2.td.heritage;

import session2.td.naturels.Nat;

public class SuccParInt extends EtatSucc {
	SuccParInt(Nat pred){
		super(pred);
	}
	
	public int chiffre(int i) {
		return this.representation().charAt(this.taille() - 1 - i);

	}
	
	public int taille() {
		return this.representation().length();
	}
	
	
	public boolean estNul() {
		return false;
	}
	
	public Nat creerSuccesseur(Nat predecesseur) {
		return new SuccParInt(predecesseur);
	}
	
	public Nat creerNatAvecValeur(int valeur) {
		if (valeur < 0) {
            throw new Error("* Erreur : valeur négative.");
        }
        if (valeur % 1 != 0) {
            throw new Error("Erreur : valeur non entière.");
        }
        return new NatParInt(valeur);
	}
	
	public Nat creerZero() {
		return new ZeroParInt();
	}
	
	public Nat creerNatAvecRepresentation(String repDecimale) {
		return this.creerNatAvecValeur(Integer.parseInt(repDecimale));
	}
	
	public Nat somme(Nat x) {
		return this.creerNatAvecValeur(x.val() + this.val()); 
	}
	
	public Nat zero() {
		return this.creerZero();
	}
	
	public Nat un() {
		return this.creerNatAvecValeur(1);
	}
	
	public Nat modulo(Nat x)  {
        return this.creerNatAvecValeur(this.val() % x.val());
    }

	public Nat div(Nat x)  {
        return this.creerNatAvecValeur((int) Math.floor(this.val() / x.val()));
    }

    public Nat produit(Nat x) {
        return this.creerNatAvecValeur(x.val() * this.val());
    }

    public String representation() {
    	return "hey";
    }

    public boolean estEgal(Nat n){
        return n.val() == this.val();
    }

//	@Override
//	public boolean estEgal(Object obj) {
//		// TODO Auto-generated method stub
//		return false;
//	}
}
