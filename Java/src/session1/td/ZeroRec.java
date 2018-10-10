package session1.td;

public class ZeroRec extends Zero{

	public ZeroRec() {
		super();
	}
	
	@Override
	public Nat somme(Nat n) {
		return n;
	}
	
	@Override
	public Nat produit(Nat n) {
		System.out.print("PasseZero");
		return this.creerZero();
	}
	
	@Override
	public boolean equals(Object o) {
		return ((Nat)o).val() == 0;
	}
	
	@Override
	public Nat div(Nat x) {
		return this.creerZero();
	}
	
	@Override
	public Nat modulo(Nat x) {
		return super.creerZero();
	}

}
