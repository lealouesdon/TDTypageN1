package session1.td;

public class SuccRec extends Succ{

	public SuccRec(Nat predecesseur) {
		super(predecesseur);
	}
	
	
	@Override
	public Nat somme(Nat n) {		
		return this.creerSuccesseur(this.predecesseur().somme(n));
	}
	
	@Override
	public Nat produit(Nat n) {
		return n.somme(this.predecesseur().produit(n));
	}
	
	@Override
	public boolean equals(Object o) {
		if(((Nat)o).estNul()) {
			return false;
		}else {
			return this.predecesseur().equals(((Nat)o).predecesseur());
		}
	}
	
	@Override
	public Nat div(Nat x) {
		 if( x.val() == 0 )
         {
             return this.creerNatAvecValeur(0);
         }
         else if(this.val()-x.val() == 0)
         {
            return this.creerNatAvecValeur(1);
         }
         else if( this.val() < x.val())
         {
            return this.creerNatAvecValeur(0); 
         }
         else
         {
             return this.creerNatAvecValeur(1+this.creerNatAvecValeur(this.val()-x.val()).div(x).val());
         }
	}
	
	@Override
	public Nat modulo(Nat x) {
		if(this.val() < x.val())
	        return this;
	     else
	        return this.creerNatAvecValeur(this.val() - x.val()).modulo(x);
	}

}
