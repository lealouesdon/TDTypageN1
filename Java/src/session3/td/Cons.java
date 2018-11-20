package session3.td;

import java.util.function.Function;
import java.util.function.Supplier;

public class Cons implements Mot{
	private char caractere;
	private Mot reste;
	private int taille;

	public Cons(char i, Mot ens) {
		this.caractere = i;
		this.reste = ens;
		this.taille = 1 + ens.taille();
	}

	@Override
	public boolean casCons() {
		return true;
	}
	
	@Override
	public int taille() {
		return this.taille;
	}

	@Override
	public char caractere() {
		return this.caractere;
	}

	@Override
	public Mot reste() {
		return this.reste;
	}

	@Override
	public <R> R filtrage(Supplier<R> vide, Function<Mot, R> casSucc) {
		throw new UnsupportedOperationException();
	}

	@Override
	public <R> R filtrageIter(Supplier<R> vide, Function<Mot, Function<R, R>> casSucc) {
		return FiltreMot.filtrageIter(this, vide, casSucc);
	}
	
	@Override
	public Mot vide() {
		return new Cons(' ',Vide.SINGLETON){
			@Override
			public <R> R filtrage(Supplier<R> vide, Function<Mot, R> casSucc) {
				return vide.get();
			}
		};
	}
	
	@Override
	public Mot cons(char c) {
		return new Cons(c, this){
			@Override
			public <R> R filtrage(Supplier<R> vide, Function<Mot, R> casSucc) {
				return casSucc.apply(Cons.this);
			}
		};
	}
}
