package session2.td.heritage;

import session2.td.naturels.Nat;

public class ZeroParInt extends EtatZero{
	
	ZeroParInt(){}
	
	public int chiffre(int i) {
		return 0;
	}
	
	public int taille() {
		return 1;
	}
	
	public int val() {
		return 0;
	}
	
	public boolean estNul() {
		return true;
	}
	
	public Nat predecesseur() {
		throw new Error("* Erreur : naturel nul sans prédécesseur.");
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
		return this;
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
//        return this.val().toString();
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
