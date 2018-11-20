package session3.td;

import java.util.function.Function;
import java.util.function.Supplier;

public enum Vide implements Mot{
	SINGLETON;

	@Override
	public boolean casVide() {
		return true;
	}

	@Override
	public int taille() {
		return 0;
	}

	@Override
	public <R> R filtrage(Supplier<R> vide, Function<Mot, R> casSucc) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <R> R filtrageIter(Supplier<R> vide, Function<Mot, Function<R, R>> casSucc) {
		// TODO Auto-generated method stub
		return null;
	}
}
