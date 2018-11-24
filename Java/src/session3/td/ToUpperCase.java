package session3.td;

public class ToUpperCase implements Visiteur<String> {
	
	@Override
	public String casVide() {
		return "";
	}

	@Override
	public String casCons(char lettre, String resteMot) {
		String upperCaseStr = Character.toUpperCase(lettre) + resteMot.toUpperCase();
		return upperCaseStr;
	}

}
