package session3.td;

public class Test {

	private static int tailleRec(Mot ens) {
		return ens.filtrageRécursif(() -> 0, (elt, reste) -> 1 + tailleRec(reste));
	}

	private static int taille(Mot ens) {
		return ens.filtrage(() -> 0, (elt, reste) -> (tailleReste -> 1 + tailleReste));
	}

	public static void main(String[] args) {

		Mot a = Vide.SINGLETON.cons('a');
		Mot b = Vide.SINGLETON;
		Representation r = new Representation();
		
		b = Vide.SINGLETON;
		for (char alphabet = 'a'; alphabet <='z'; alphabet++ ) {
			b = b.union(Vide.SINGLETON.cons(alphabet));
		}
		System.out.println("Ens a...z : " + b.accueil(r));
		System.out.println("Ens z...a : " + b.accueilRecursif(r));
		System.out.println("Est vide (false)? "+b.estNul());
		System.out.println("Taille (26)? "+b.taille());
		System.out.println("Taille (26)? "+taille(b));
		System.out.println("Taille Recursive (26)? "+tailleRec(b));
		
		//filtrage
		Mot vide = Vide.SINGLETON;
		Cons un = (Cons)Vide.SINGLETON.cons('a');
		Cons deux =(Cons) un.cons('b');
		

	}

}
