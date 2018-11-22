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
		Representation r = new Representation();
		
		b = Vide.SINGLETON;
		for (char alphabet = 'a'; alphabet <='z'; alphabet++ ) {
			b = b.unionRec(Vide.SINGLETON.consRec(alphabet));
		}
		
		System.out.println("-------Union---------");
		System.out.println("Ens z...a : " + b.accueil(r));
		System.out.println("Ens a...z : " + b.accueilRecursif(r));
		System.out.println("Est vide (false)? "+b.casVide());
		System.out.println("Taille (26)? "+b.taille());
		System.out.println("Taille (26)? "+taille(b));
		System.out.println("Taille Recursive (26)? "+tailleRec(b));
		System.out.println("Caractère a la place 4 (v)"+b.caractereA(4));
		
		Mot a = b.consRec('1');
		System.out.println("-------Cons---------");
		System.out.println("Ens z...a1 : " + a.accueil(r));
		System.out.println("Ens 1a...z : " + a.accueilRecursif(r));
		System.out.println("Est vide (false)? "+a.casVide());
		System.out.println("Taille (27)? "+a.taille());
		System.out.println("Taille (27)? "+taille(a));
		System.out.println("Taille Recursive (27)? "+tailleRec(a));
		System.out.println("Caractère a la place 4 (v)"+a.caractereA(4));

		
		Mot c = Vide.SINGLETON;
		System.out.println("-------Vide---------");
		System.out.println("Ens (vide) : " + c.accueil(r));
		System.out.println("Ens (vide) : " + c.accueilRecursif(r));
		System.out.println("Est vide (true)? "+c.casVide());
		System.out.println("Taille (0)? "+c.taille());
		System.out.println("Taille (0)? "+taille(c));
		System.out.println("Taille Recursive (0)? "+tailleRec(c));
	}
	
	private static void testIter() {
		Mot b = Vide.SINGLETON;
		Representation r = new Representation();
		
		b = Vide.SINGLETON;
		for (char alphabet = 'a'; alphabet <='z'; alphabet++ ) {
			b = b.unionIter(Vide.SINGLETON.consIter(alphabet));
		}
		
		System.out.println("-------Union---------");
		System.out.println("Ens z...a : " + b.accueil(r));
		System.out.println("Ens a...z : " + b.accueilRecursif(r));
		System.out.println("Est vide (false)? "+b.casVide());
		System.out.println("Taille (26)? "+b.taille());
		System.out.println("Taille (26)? "+taille(b));
		System.out.println("Taille Recursive (26)? "+tailleRec(b));
		System.out.println("Caractère a la place 4 (d)"+b.caractereA(4));

		
		Mot a = b.consIter('1');
		System.out.println("-------Cons---------");
		System.out.println("Ens z...a1 : " + a.accueil(r));
		System.out.println("Ens 1a...z : " + a.accueilRecursif(r));
		System.out.println("Est vide (false)? "+a.casVide());
		System.out.println("Taille (27)? "+a.taille());
		System.out.println("Taille (27)? "+taille(a));
		System.out.println("Taille Recursive (27)? "+tailleRec(a));
		System.out.println("Caractère a la place 4 (d)"+a.caractereA(4));

		
		Mot c = Vide.SINGLETON;
		System.out.println("-------Vide---------");
		System.out.println("Ens (vide) : " + c.accueil(r));
		System.out.println("Ens (vide) : " + c.accueilRecursif(r));
		System.out.println("Est vide (true)? "+c.casVide());
		System.out.println("Taille (0)? "+c.taille());
		System.out.println("Taille (0)? "+taille(c));
		System.out.println("Taille Recursive (0)? "+tailleRec(c));
	}

}
