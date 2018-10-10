package session1.td;

public class Test {

	public static void main(String[] args) {
		NatParInt test1 = new NatParInt(0);
		test(test1);
		System.out.println("---------------------");
		ZeroRec test2 = new ZeroRec();
		test(test2);
		System.out.println("---------------------");
		SuccRec test3 = new SuccRec(test1);
		test(test3);
		System.out.println("---------------------");
		NatDecimal test4 = new NatDecimal("2");
		test(test4);
		
	}
	
	static void test(FabriqueNat<Nat> fab) {
		Nat zero = fab.creerZero();
		System.out.println("0 ? " + zero);
		System.out.println("0 = 0 (true) ? " + zero.equals(zero.zero()));
		Nat un = fab.creerSuccesseur(zero);
		System.out.println("1 ? "+ un);
		System.out.println("1 = 1 (true) ? " + un.equals(un.un()));
		System.out.println("predecesseur de 1 ? "+ un.predecesseur());
		Nat dix = fab.creerNatAvecValeur(10);
		System.out.println("predecesseur de 10 ? "+ dix.predecesseur());
		Nat cinq = fab.creerNatAvecValeur(5);
		System.out.println("5 ? " + cinq);
		System.out.println("predecesseur de 5 ? "+ cinq.predecesseur());
		Nat six = fab.creerNatAvecValeur(6);
		System.out.println("5 + 6 ? "+ cinq.somme(six));
		System.out.println("5 * 6 ? "+ cinq.produit(six));
		Nat tt = fab.creerNatAvecValeur(33);
		System.out.println("33 / 6 quotien ? "+ tt.div(six) + " -------- 33 mod 6 ? " + tt.modulo(six));
		Nat large = fab.creerNatAvecValeur(2000000000);
		System.out.println("2000000000 + 2000000000 ? "+large.somme(large));

	}

}
