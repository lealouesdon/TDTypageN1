package session3.td;


public class UnionRec implements Mot{
	private Mot gauche;
	private Mot droit;
	private int taille;

	public UnionRec(Mot g, Mot d) {
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

	/*@Override
	public char caractereA(int index) {
		if(index<droit.taille()) {
			if(index==0) {
				return droit.caractere();
			}else {
				return droit.caractereA(index);
			}
			
		}else {
			return gauche.caractereA(index-droit.taille());
		}
	}*/

	@Override
	public int derniereOccurence(char ch) {
		// Returns the index of the of the character ch

	    if (ch == this.caractere()) {
	        // base case: ch is at the beginning of str; return 0
	        return 0; 
	    }

	    // recursive step
	    int subIndex = this.reste().derniereOccurence(ch);

	    return 1 + subIndex; 
	}

	
}
