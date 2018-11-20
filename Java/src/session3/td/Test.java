package session3.td;

import java.util.function.BiFunction;
import java.util.function.Function;



public class Test {
	
	/*public static Mot factorielle(Mot n){
		return n.filtrageIter(
				() -> n.vide().succ(),
				pred -> (factPred -> pred.succ().mult(factPred)));
	}*/
	
	public static String rep(Mot n){
		return n.filtrage(
				() -> "A", 
				pred -> "B" + rep(pred));
	}
	
	public static int val(Mot n){
		return n.filtrageIter(
				() -> 0,
				pred -> (valPred -> valPred + 1));
	}

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
		for (int i = 0; i < 10000000; i++) {
			b = b.union(a);
		}
		System.out.println("Ens a, ..., z : (" + b.accueil(r) + ")");
		b = Vide.SINGLETON;
		for (char alphabet = 'a'; alphabet <='z'; alphabet++ ) {
			b = b.union(Vide.SINGLETON.cons(alphabet));
		}
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
		
		//filtrage
		Mot vide = Vide.SINGLETON;
		Cons un = (Cons)Vide.SINGLETON.cons('a');
		Cons deux =(Cons) un.cons('b');
		/*BiFunction<Mot, Mot, Mot> add = 
				REC2(fun -> ((n, p) -> n.filtrage(
						() -> p, 
						pred -> fun.apply(pred, p).succ())));
		//NatInductif deux = add.apply(un, un);
		System.out.println("2 : " + rep(deux));
		System.out.println("4 : " + rep(add.apply(deux, deux)));
		System.out.println("4 : " + rep(deux.add(deux)));
		System.out.println("4 : " + rep(deux.mult(deux)));
		System.out.println("6 : " + deux.mult(deux).add(deux).rep());
		
		Function<Integer, Integer> fact1 = 
				REC(fun -> ((Integer n) -> 
					(n == 0) ? 1 : fun.apply(n - 1) * n));
		System.out.println("120 : " + fact1.apply(5));							
		
		Function<NatInductif, NatInductif> fact2 = 
				REC(fun -> (n -> n.filtrage(
						() -> n.zero().succ(), 
						pred -> fun.apply(pred).mult(pred.succ()))));
		System.out.println("120 : " + val(fact2.apply(deux.add(deux).succ())));
		System.out.println("24 : " + val(factorielle(deux.add(deux))));*/
		System.out.println("vide : " + rep(deux));

	}

}
