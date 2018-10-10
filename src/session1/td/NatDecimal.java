package session1.td;

public class NatDecimal implements Nat{
	
	//attributs
	private String chiffres;
	public static final FabriqueNat<Nat> FAB = new NatDecimal("");
	
	//constructeur
	public NatDecimal(String rep) {
		this.chiffres=rep;
	}
	
	public Nat somme(Nat x) {
		 int t = this.taille() < x.taille() ? x.taille() : this.taille();
		  StringBuilder rep = new StringBuilder();
		  int retenue = 0;
		  for(int i = 0; i < t; i++){
		    int chiffre = this.chiffre(i) + x.chiffre(i) + retenue;
		    if(chiffre > 9){
		      chiffre = chiffre - 10;
		      retenue = 1;
		    }else{
		      retenue = 0;
		    }
		    rep.append(Integer.toString(chiffre));
		  }
		  rep = retenue == 0 ? rep : rep.append(1);
		  return new NatDecimal(rep.reverse().toString());
		}

	@Override
	public Nat creerNatAvecValeur(int x) {
		return new NatDecimal(String.valueOf(x));
	}

	@Override
	public NatDecimal creerZero() {
		return new NatDecimal("0");
	}

	@Override
	public boolean estNul() {
		return this.val()==0;
	}

	@Override
	public Nat predecesseur() {
		int t = this.taille();
		  StringBuilder rep = new StringBuilder();
		  int retenue = 0;
		  for(int i = t-1; i >= 0; i--){
		    int chiffre = this.chiffre(i) - 1 + retenue;
		    if(chiffre < 0){
		    	chiffre = 9;
		    	retenue = 0;
		    }else{
		      retenue = 1;
		    }
		    rep.append(Integer.toString(chiffre));
		  }
		  String nb = rep.toString();
		  //System.out.println(nb.charAt(nb.length()-1));
		  if(nb.charAt(nb.length()-1)=='0'&&nb.length()>1) {
			  nb = nb.substring(0, nb.length() - 1);
		  }
		  return new NatDecimal(new StringBuilder(nb).reverse().toString());
	}

	@Override
	public int val() {
		return Integer.parseInt(this.chiffres);
	}

	@Override
	public int taille() {
		return this.chiffres.length();
	}

	@Override
	public int chiffre(int i) {
		try {
			return Integer.parseInt(String.valueOf(this.chiffres.charAt(i)));
		} catch (Exception e) {
			return 0;		
		}
	}

	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		int t = predecesseur.taille();
		  StringBuilder rep = new StringBuilder();
		  int retenue = 1;
		  for(int i = 0; i < t; i++){
		    int chiffre = predecesseur.chiffre(i) + retenue;
		    if(chiffre > 9){
		      chiffre = chiffre - 10;
		      retenue = 1;
		    }else{
		      retenue = 0;
		    }
		    rep.append(Integer.toString(chiffre));
		  }
		  rep = retenue == 0 ? rep : rep.append(1);
		  return new NatDecimal(rep.reverse().toString());
	}

	@Override
	public Nat zero() {
		return this.creerZero();
	}

	@Override
	public Nat produit(Nat n) {
		if(this.estNul()) {
			return this.creerZero();
		}else {
			return this.creerNatAvecValeur(n.val() + n.produit(this.predecesseur()).val());
		}
	}

	@Override
	public Nat un() {
		return this.creerNatAvecValeur(1);
	}

	@Override
	public Nat modulo(Nat x) {
		if(this.val()<x.val()) {
			return this;
		}else {
			return this.creerNatAvecValeur(this.creerNatAvecValeur(this.val()-x.val()).modulo(x).val());
		}
		//return this.creerNatAvecValeur(this.val() % x.val());
	}

	@Override
	public Nat div(Nat x) {
		if(this.estNul()) {
			return this.creerZero();
		}else if (this.modulo(x).val()==this.creerZero().val()){
			return this.creerNatAvecValeur(1 + this.predecesseur().div(x).val());
		}else {
			return this.creerNatAvecValeur(this.predecesseur().div(x).val());
		}
	}

	@Override
	public String toString(){
		return this.chiffres;
	}
	
	@Override
	public boolean equals(Object o) {
		Nat x = (Nat)o;
		int t = this.taille() < x.taille() ? x.taille() : this.taille();
		boolean equal = true;
		  for(int i = 0; i < t; i++){
		    if(this.chiffre(i) != x.chiffre(i)){
		    	equal = false;
		    }
		  }
		  return equal;
	}

}
