package session3.td;

class Representation implements Visiteur<String> {

	@Override
	public String casVide() {
		return "";
	}

	@Override
	public String casCons(char n, String r) {
		return  n+r ; // Inversion dans le cas de la récursion
	}

}

