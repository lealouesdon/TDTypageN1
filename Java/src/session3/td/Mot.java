package session3.td;

import java.util.Iterator;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.Supplier;

/*
 * Mot ::= Vide | Cons(Caractere, Mot) | Union(Mot, Mot)
 */
public interface Mot extends Iterable<Character>,FiltreMot<Mot>,FabriqueMot<Mot>{
		// Sélecteurs
		default boolean casVide(){
			return false;
		}
		default boolean casCons(){
			return false;
		}
		default boolean casUnion(){
			return false;
		}
		
		// Destructeurs
		default char caractere(){
			throw new UnsupportedOperationException();
		}
		default Mot reste() {
			throw new UnsupportedOperationException();
		}
		default Mot gauche(){
			throw new UnsupportedOperationException();
		}
		default Mot droit(){
			throw new UnsupportedOperationException();
		}
		// Constructeurs
		default Mot vide(){
			return Vide.SINGLETON; 
		}
		default Mot cons(char n){
			return new Cons(n, this);
		}
		default Mot union(Mot ens){
			return new Union(this, ens);
		}
		// Autres accesseurs
		int taille();
		default boolean estVide(){
			return this.taille() == 0;
		}
		default Iterateur iterateur(){
			return new Iterateur(this);
		}
		default 	
		public Iterator<Character> iterator() {
			//TODO
			return this.iterateur();
		}

		// Visiteur itératif (programmé récursivement puis itérativement)
		default <T> T accueilRecursif(Visiteur<T> v) {
			if (this.estVide()) {
				return v.casVide();
			}
			return v.casCons(this.caractere(), 
					this.reste().accueilRecursif(v));
		}

		default <T> T accueil(Visiteur<T> v) {
			T r = v.casVide();
			for (char x : this) {
				r = v.casCons(x, r);
			}
			return r;
		}

		// Visiteur itératif avec des lambda-expressions
		//TODO
		default <T> T accueilRecursif(Supplier<T> casVide, BiFunction<Character, T, T> casCons) {
			if (this.estVide()) {
				return casVide.get();
			}
			return casCons.apply(this.caractere(), this.reste().accueilRecursif(casVide, casCons));
		}

		default <T> T accueil(Supplier<T> casVide, BiFunction<Integer, T, T> casCons) {
			T r = casVide.get();
			for (int x : this) {
				r = casCons.apply(x, r);
			}
			return r;
		}

		// Visiteur récursif primitif analogue du filtrage par cas (pattern matching),
		// programmé récursivement
		//TODO
		default <T> T filtrageRécursif(Supplier<T> casVide, BiFunction<Character, Mot, T> casCons) {
			if (this.estVide()) {
				return casVide.get();
			}
			return casCons.apply(this.caractere(), this.reste());
		}

		// Visiteur récursif primitif analogue du filtrage par cas (pattern matching),
		// programmé itérativement
		default <T> T filtrage(Supplier<T> casVide, BiFunction<Character, Mot, Function<T, T>> casCons) {
			T r = casVide.get();
			Mot arg = this.vide();
			Mot courant = this;
			while (!courant.estVide()) {
				char e = courant.caractere();
				r = casCons.apply(e, arg).apply(r);
				arg = arg.cons(e);
				courant = courant.reste();
			}
			return r;
		}
	}

	/*
	 * Visiteur générique (le paramètre T désigne le type de ce qui est calculé) Le
	 * visiteur définit une structure d'algèbre associée à l'itérateur. Cf. fold de
	 * Haskell.
	 */
	interface Visiteur<T> {
		T casVide();

		T casCons(char n, T r);
	}
