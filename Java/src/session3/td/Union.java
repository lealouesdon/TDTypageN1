package session3.td;

import java.util.function.Function;
import java.util.function.Supplier;

public class Union implements Mot{
	private Mot gauche;
	private Mot droit;
	private int taille;

	public Union(Mot g, Mot d) {
		this.gauche = g;
		this.droit = d;
		this.taille = g.taille() + d.taille();
	}

	@Override
	public int taille() {
		return this.taille;
	}

	@Override
	public boolean casUnion() {
		return true;
	}

	@Override
	public char caractere() {
		Iterateur i = this.iterateur();
		return i.suivant();
	}

	@Override
	public Mot reste() {
		Iterateur i = this.iterateur();
		return i.reste();
	}

	@Override
	public Mot gauche() {
		return this.gauche;
	}

	@Override
	public Mot droit() {
		return this.droit;
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
		return new Union(Vide.SINGLETON,Vide.SINGLETON){
			@Override
			public <R> R filtrage(Supplier<R> vide, Function<Mot, R> casSucc) {
				return vide.get();
			}
		};
	}
	
	public Mot union(Mot mot) {
		return new Union(mot, this){
			@Override
			public <R> R filtrage(Supplier<R> vide, Function<Mot, R> casSucc) {
				return casSucc.apply(Union.this);
			}
		};
	}

	
}
