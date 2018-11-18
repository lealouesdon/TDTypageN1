package session3.td;

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
}
