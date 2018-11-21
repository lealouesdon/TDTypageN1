package session3.td;

class Representation implements Visiteur<String> {

	@Override
	public String casVide() {
		return "";
	}

	@Override
	public String casCons(char n, String r) {
		return r + n ; // Inversion dans le cas de la récursion
	}

}