package session3.td;

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
}
