package session1.td;

public class Succ implements Nat{
	public static FabriqueNat<Nat> FAB = new Succ(Zero.FAB.creerZero());
	private Nat predecesseur;
	
	public Succ(Nat predecesseur) {
		this.predecesseur=predecesseur;
	}
	
	@Override
	public Nat creerNatAvecValeur(int x) {
		if (x == 0) {
			return new ZeroRec();
		}else {
			return new SuccRec(NatParInt.FAB.creerNatAvecValeur(x-1));
		}
			
		
	}

	@Override
	public boolean estNul() {
		return false;
	}

	@Override
	public Nat predecesseur() {
		return this.predecesseur;		
	}
	
	@Override
	public String toString(){
		return String.valueOf(this.val());
	}
	@Override
	public boolean equals(Object o) {
		return ((Nat)o).val()==this.val();
	}

	@Override
	public Nat creerZero() {
		return this.creerNatAvecValeur(0);
		//return new Zero();
	}

	@Override
	public int val() {
		return 1 + predecesseur.val();
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
	public Nat creerSuccesseur(Nat predecesseur) {
		//return new Succ(predecesseur);
		return new SuccRec(predecesseur);
	}

	@Override
	public Nat somme(Nat n) {
		return this.creerNatAvecValeur(this.val() + n.val());
	}

	@Override
	public Nat zero() {
		return this.creerZero();
	}

	@Override
	public Nat produit(Nat n) {
		//System.out.println("passe");
		return this.creerNatAvecValeur(this.val() * n.val());
	}

	@Override
	public Nat un() {
		return this.creerNatAvecValeur(1);
	}

	@Override
	public Nat modulo(Nat x) {
		return this.creerNatAvecValeur(this.val() % x.val());
	}

	@Override
	public Nat div(Nat x) {
		return this.creerNatAvecValeur(this.val() / x.val());
	}

	
}
