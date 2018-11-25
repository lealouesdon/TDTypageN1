package session3.td;

public class CharAt implements Visiteur<Character>{

	private int index;
	private int compteur = 0;
	private char charTrouve;
	
	public CharAt(int index) {
		this.index = index;
	}

	
	@Override
	public Character casVide() {
		return charTrouve;
	}

	@Override
	public Character casCons(char str, Character r) {
		
		if (compteur == index) {
			charTrouve = str;
			compteur++;
			return str;
		}
		compteur++;
		return r;
	}
}
