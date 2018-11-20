package session3.td;

import java.util.function.Function;
import java.util.function.Supplier;

interface FiltreMot<T> {
	<R> R filtrage(Supplier<R> vide, Function<T, R> casSucc);
	<R> R filtrageIter(Supplier<R> vide, Function<T, Function<R, R>> casSucc);
	public static <T extends FiltreMot<T> & FabriqueMot<T>, R> R filtrageIter(T n, Supplier<R> vide, Function<T, Function<R, R>> casSucc){
		R r = vide.get();
		T p = n.vide();
		while(!n.estNul()){
			r = casSucc.apply(p).apply(r);
			p = p.cons('a');
			n = n.pred();
		}
		return r;
	}
	default public boolean estNul() {
		return filtrage(() -> true, pred -> false);
	}
	default public T pred() {
		return filtrage(() -> {throw new UnsupportedOperationException();}, pred -> pred);
	}
}
