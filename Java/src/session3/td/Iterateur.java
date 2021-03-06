package session3.td;

public class Iterateur implements java.util.Iterator<Character>{
	private Mot reste;
	private char caractere;

	public Iterateur(Mot ens) {
		decomposer(ens);
	}

	private void decomposer(Mot ens) {
		while (true) {
			if (ens.casVide()) {
				this.reste = null;
				break;
			}
			if (ens.casCons()) {
				this.reste = ens.reste();
				this.caractere = ens.caractere();
				break;
			}
			if (ens.casUnion()) {
				if (ens.gauche().casVide()) {
					ens = ens.droit();
					continue;
				} else if (ens.gauche().casCons()) {
					this.reste = ens.gauche().reste().unionIter(ens.droit());
					this.caractere = ens.gauche().caractere();
					break;
				} else {
					ens = ens.gauche().gauche().unionIter(ens.gauche().droit().unionIter(ens.droit()));
					continue;
				}
			}
		}
	}

	public boolean aSuivant() {
		return reste != null;
	}

	public char suivant() {
		if (reste == null)
			throw new UnsupportedOperationException();
		char r = caractere;
		decomposer(reste);
		return r;
	}

	public Mot reste() {
		if (reste == null)
			throw new UnsupportedOperationException();
		return this.reste;
	}

	@Override
	public boolean hasNext() {
		return this.aSuivant();
	}

	@Override
	public Character next() {
		return this.suivant();
	}
}
