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
			tempGauche = tempGauche.reste();
		}
		Mot tempDroit = droit;
		while(!tempDroit.casVide()) {
			result++;
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

	
}
