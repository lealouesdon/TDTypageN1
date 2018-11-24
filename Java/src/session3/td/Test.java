package session3.td;

public class Test {

	private static int tailleRec(Mot ens) {
		return ens.filtrageRécursif(() -> 0, (elt, reste) -> 1 + tailleRec(reste));
	}

	private static int taille(Mot ens) {
		return ens.filtrage(() -> 0, (elt, reste) -> (tailleReste -> 1 + tailleReste));
	}

	public static void main(String[] args) {

		System.out.println("-------Test Recursif---------------------------------");
		testRec();
		
		System.out.println("-------Test Iteratif---------------------------------");
		testIter();
		
		
		

	}

	private static void testRec() {
		Mot b = Vide.SINGLETON;

		b = Vide.SINGLETON;
		for (char alphabet = 'a'; alphabet <='z'; alphabet++ ) {
			b = b.unionRec(Vide.SINGLETON.consRec(alphabet));
		}
		System.out.println("-------Union---------");
		test(b);
		System.out.println("-------Cons---------");
		Mot a = b.consRec('1');
		test(a);


		System.out.println("-------Vide---------");
		Mot c = Vide.SINGLETON;
		test(c);
	}
	
	private static void testIter() {
		Mot b = Vide.SINGLETON;

		b = Vide.SINGLETON;
		for (char alphabet = 'a'; alphabet <='z'; alphabet++ ) {
			b = b.unionIter(Vide.SINGLETON.consIter(alphabet));
		}
		System.out.println("-------Union---------");
		test(b);
		System.out.println("-------Cons---------");
		Mot a = b.consIter('1');
		test(a);


		System.out.println("-------Vide---------");
		Mot c = Vide.SINGLETON;
		test(c);
	}
	
	
	private static void test(Mot m) {
		Representation r = new Representation();
		CharAt ch = new CharAt(4);
		ToUpperCase tuc = new ToUpperCase();
		LastOccurence last = new LastOccurence('e');
		System.out.println("Mot : " + m.accueil(r));
		System.out.println("Mot recursif : " + m.accueilRecursif(r));
		System.out.println("Est vide ? "+m.casVide());
		System.out.println("Taille ? "+m.taille());
		System.out.println("Taille ? "+taille(m));
		System.out.println("Taille Recursive ? "+tailleRec(m));
		System.out.println("Caractère a la place 4 : "+m.accueil(ch));
		System.out.println("Derniere occurence de e : "+m.accueil(last));
		System.out.println("En majuscule : "+m.accueil(tuc));
		System.out.println("En majuscule (aceuil recursif) : "+m.accueilRecursif(tuc));
	}

}
