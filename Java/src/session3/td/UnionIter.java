package session3.td;

public class UnionIter implements Mot{
	private Mot gauche;
	private Mot droit;

	public UnionIter(Mot g, Mot d) {
		this.gauche = g;
		this.droit = d;
	}

	@Override
	public int taille() {
		int result = 0;
		Mot tempGauche = gauche;
		while(!tempGauche.casVide()) {
			result++;
			if(!tempGauche.casVide())
				tempGauche = tempGauche.reste();
		}
		Mot tempDroit = droit;
		while(!tempDroit.casVide()) {
			result++;
			if(!tempDroit.casVide())
				tempDroit = tempDroit.reste();
		}
		return result;
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

	@Override
	public char caractereA(int index) {
		if(index<this.taille()) {
			int result = 0;
			char resultChar = ' ';
			Mot tempRest;
			if(index<droit.taille()) {
				tempRest = droit;
			}else {
				tempRest = gauche;
			}
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
	}

	
}
