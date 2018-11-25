package session3.td;

public class LastOccurence implements Visiteur<Integer>{

	private int lastOccurence;
	private char charRecherche;
	private int cpt = 0;


	public LastOccurence(char charRecherche) {
		this.charRecherche = charRecherche;
		cpt = 0;
	}

	@Override
	public Integer casVide() {
		return lastOccurence;
	}

	@Override
	public Integer casCons(char n, Integer r) {
		
		if(n==charRecherche) {
			lastOccurence = cpt;
		}
		cpt++;
		return lastOccurence;
	}

}
