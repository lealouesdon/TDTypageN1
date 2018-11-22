package session3.td;

public class ConsIter implements Mot{
	private char caractere;
	private Mot reste;

	public ConsIter(char i, Mot ens) {
		this.caractere = i;
		this.reste = ens;
	}

	@Override
	public boolean casCons() {
		return true;
	}
	
	@Override
	public int taille() {
		int result = 0;
		Mot tempRest = reste;
		while(!tempRest.casVide()) {
			result++;
			if(!tempRest.casVide())
				tempRest = tempRest.reste();
		}
		return 1 + result;
		
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
