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

	@Override
	public int derniereOccurence(char ch) {
		throw new UnsupportedOperationException();
	}	
}
