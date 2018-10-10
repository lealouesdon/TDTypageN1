package session1.td;

public class Zero implements Nat{
	static final FabriqueNat<Nat> FAB = new Zero();
	
	public Zero() {}

	@Override
	public Nat creerNatAvecValeur(int x) {
		if(x==0) {
			return this.creerZero();
		}else {
			//return this.creerSuccesseur(this.creerNatAvecValeur(x - 1));
			return NatParInt.FAB.creerNatAvecValeur(x);
		}
	}

	@Override
	public boolean estNul() {
		return true;
	}

	@Override
	public Nat predecesseur() {
		
			throw new java.lang.UnsupportedOperationException();
	}
	
	@Override
	public String toString(){
		return String.valueOf(this.val());
	}
	@Override
	public boolean equals(Object o) {
		//System.out.println("o.val()"+ o.val());
		//System.out.println("this.val()"+this.val());
		return ((Nat)o).val()==this.val();
	}

	@Override
	public Zero creerZero() {
		return this;
	}

	@Override
	public int val() {
		return 0;
	}

	@Override
	public int taille() {
		return 1;
	}

	@Override
	public int chiffre(int i) {
		return 0;
	}

	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		return new SuccRec(predecesseur);
	}

	@Override
	public Nat somme(Nat n) {
		int result = this.val() + n.val();
		System.out.println("this Val : " + String.valueOf(this.val()));
		System.out.println("other val : "+ String.valueOf(n.val()));
		return this.creerNatAvecValeur(result);
	}

	@Override
	public Nat zero() {
		return this.creerZero();
	}

	@Override
	public Nat produit(Nat n) {
		return this.creerZero();
	}

	@Override
	public Nat un() {
		return this.creerNatAvecValeur(1);
	}

	@Override
	public Nat modulo(Nat x) {
		return this.creerZero();
	}

	@Override
	public Nat div(Nat x) {
		return this.creerNatAvecValeur(this.val()/x.val());
	}

	
}
