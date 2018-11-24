package session3.td;

public class ConsRec implements Mot{
	private char caractere;
	private Mot reste;
	private int taille;

	public ConsRec(char i, Mot ens) {
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

	/*@Override
	public char caractereA(int index) {
		if(index==0) {
			return this.caractere;
		}else {
			return reste.caractereA(index);
		}
	}*/

	@Override
	public int derniereOccurence(char ch) {
		// Returns the index of the of the character ch

	    if (ch == this.caractere) {
	        // base case: ch is at the beginning of str; return 0
	        return 1; 
	    }

	    // recursive step
	    int subIndex = reste.derniereOccurence(ch);

	    return 1 + subIndex; 
	}
}
