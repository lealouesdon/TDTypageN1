package session1.td;

public class NatParInt implements Nat{
	//attributs
	public static FabriqueNat<Nat> FAB = new NatParInt(0);
	
	private int val;
	
	//constructor
	NatParInt(int val){
		if(val>=0) {
			this.val = val;
		}else {
			throw new java.lang.IllegalArgumentException();
		}
	}
	
	//methodes
	
	@Override
	public int val() {
		return this.val;
	}

	@Override
	public Nat creerNatAvecValeur(int x) {
		return new NatParInt(x);
	}

	@Override
	public boolean estNul() {
		return this.val()==0;
	}

	@Override
	public Nat predecesseur() {
		if(this.estNul()) {
			throw new java.lang.UnsupportedOperationException();
		}else {
			return new NatParInt(this.val()-1);
		}
		
	}
	
	@Override
	public String toString(){
		return String.valueOf(this.val());
	}
	@Override
	public boolean equals(Object o) {
		//System.out.println("o.val()"+ o.val());
		//System.out.println("this.val()"+this.val());
		return ((NatParInt)o).val()==this.val();
	}

	@Override
	public Nat creerZero() {
		return this.creerNatAvecValeur(0);
		//return new Zero();
	}

	@Override
	public int taille() {		
		return String.valueOf(this.val()).length();
	}

	@Override
	public int chiffre(int i) {
		String s = String.valueOf(this.val());
		return Integer.parseInt(String.valueOf(s.charAt(i)));
	}

	@Override
	public Nat somme(Nat n) {
		try {
			int result = this.val() + n.val();
			return this.creerNatAvecValeur(result);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return this.creerZero();
		}
		
	}

	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		return this.creerNatAvecValeur(predecesseur.val()+1);
	}

	@Override
	public Nat modulo(Nat x) {
		return this.creerNatAvecValeur(this.val() % x.val());
	}

	@Override
	public Nat div(Nat x) {
		return this.creerNatAvecValeur(this.val()/x.val());
	}

	@Override
	public Nat zero() {
		return this.creerZero();
	}

	@Override
	public Nat produit(Nat n) {
		return this.creerNatAvecValeur(this.val() * n.val());
	}

	@Override
	public Nat un() {
		return this.creerNatAvecValeur(1);
	}

	
}
