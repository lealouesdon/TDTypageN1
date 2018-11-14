package session2.td.agregation;

import session2.td.naturels.*;

public class Test {

	public static void main(String[] args) {
		FabriqueNaturels<Nat> fab = new NatCalculantAvecDesNombresDecimaux(new NombreDecimal("0"));
		test(fab);
		fab = new NatCalculantAvecDesNombresDecimaux(new IntPositif(0));
		test(fab);
		fab = new NatCalculantAvecDesNombresDecimaux(new ZeroInductif());
		test(fab);
		fab = new NatCalculantAvecDesInts(new NombreDecimal("0"));
		test(fab);
		fab = new NatCalculantAvecDesInts(new IntPositif(0));
		test(fab);
		fab = new NatCalculantAvecDesInts(new ZeroInductif());
		test(fab);
		fab = new NatCalculantRecursivement(new NombreDecimal("0"));
		test(fab);
		fab = new NatCalculantRecursivement(new IntPositif(0));
		test(fab);
		fab = new NatCalculantRecursivement(new ZeroInductif());
		test(fab);
	}

	private static void test(FabriqueNaturels<Nat> fab) {
		/*
		 * - Créer l'entier zéro à  partir de la fabrique et l'affecter à  une
		 * variable *zero*. 
		 * - Afficher sa valeur. 
		 * - Tester l'égalité entre *zero* et *zero.zero()*. 
		 * - Créer l'entier un à  partir de la fabrique et l'affecter à  une variable *un*. 
		 * - Afficher sa valeur. 
		 * - Tester l'égalité entre *un* et *un.un()*. 
		 * - Créer l'entier cinq à  partir de la fabrique et l'affecter à  une variable *cinq*. 
		 * - Afficher sa valeur. 
		 * - Créer l'entier six à  partir de la fabrique et l'affecter à  une variable *six*. 
		 * - Calculer la somme de cinq et six et afficher le
		 * résultat. 
		 * - Calculer le produit de cinq et six et afficher le
		 * résultat.
		 * - Calculer le quotient et le reste de la division euclidienne de *33* par *6*.
		 */
		System.out.println("************************************************");
		System.out.println(fab.getClass());
		System.out.println("************************************************");
		Nat zero = fab.creerNatAvecValeur(0);
		System.out.println("0 ? " + zero);
		System.out.println("true ? " + zero.equals(zero.zero()));
		Nat un = fab.creerSuccesseur(zero);
		System.out.println("1 ? " + un);
		zero = un.predecesseur();
		System.out.println("0 ? " + zero);
		System.out.println("true ? " + un.equals(un.un()));
		Nat cinq = fab.creerNatAvecValeur(5);
		System.out.println("5 ? " + cinq);
		Nat six = fab.creerNatAvecValeur(6);
		System.out.println("11 ? " + cinq.somme(six));
		System.out.println("30 ? " + cinq.produit(six));
		System.out.println("3 ? " + cinq.produit(six).somme(six.div(un.somme(un))).modulo(six));
		System.out.println("5 ? " + cinq.produit(six).somme(six.div(un.somme(un))).div(six));
		System.out.println("30 ? " + Outils.produitRusse(cinq, six, cinq.somme(cinq)));
		
	}

}
