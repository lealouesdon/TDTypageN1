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

	/*@Override
	public char caractereA(int index) {
		if(index<this.taille()) {
			int result = 0;
			char resultChar = ' ';
			Mot tempRest = reste;
			while(!tempRest.casVide()) {
				if(result==index-1) {
					resultChar = tempRest.caractere();
					break;
				}
				result++;
				tempRest = tempRest.reste();
			}
			return resultChar;
		}else {
			throw new UnsupportedOperationException();
		}
		
	}*/

	@Override
	public int derniereOccurence(char ch) {
			int i = 0;
			int occurence = 0;
			Mot tempRest = reste;
			while(!tempRest.casVide()) {
				if(tempRest.caractere()==ch) {
					occurence = i+1;
				}
				i++;
				tempRest = tempRest.reste();
			}
			return occurence;
	}
}
