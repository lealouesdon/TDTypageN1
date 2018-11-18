package session3.td;

import java.util.function.Function;

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
		for (int i = 0; i < 10000000; i++) {
			b = b.union(a);
		}
		
		System.out.println(b);
		b = Vide.SINGLETON;
		for (char alphabet = 'a'; alphabet <='z'; alphabet++ ) {
			b = b.union(Vide.SINGLETON.cons(alphabet));
		}
		Representation r = new Representation();
		System.out.println("Ens a, ..., z : (" + b.accueil(r) + ")");
		System.out.println("Ens z, ..., a : (" + b.accueilRecursif(r) + ")");

		/*CalculCardinal c = new CalculCardinal();
		System.out.println("Taille ens (100) : " + b.accueil(c));
		System.out.println("Taille ens (100) : " + b.accueilRecursif(c));

		System.out.println("Taille ens (100) : " + b.accueil(() -> 0, (elt, card) -> card + 1));
		System.out.println("Taille ens (100) : " + b.accueilRecursif(() -> 0, (elt, card) -> card + 1));
		System.out.println("Taille ens (100) : " + tailleRec(b));
		System.out.println("Taille ens (100) : " + taille(b));
		
		Function<Ensemble4, Integer> defTaille = new FonctionRecursive<>(
				fun -> (ens -> ens.filtrageRécursif(() -> 0, (elt, reste) -> 1 + fun.apply(reste))));

		System.out.println("Taille ens (100) : " + defTaille.apply(b));*/

	}

}
