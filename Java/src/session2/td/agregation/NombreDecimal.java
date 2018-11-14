package session2.td.agregation;

public class NombreDecimal implements EtatNaturelPur {
	
	private String chiffres;
	
	public NombreDecimal(String rep) {
		this.chiffres = rep;
	}
	
    public int chiffre(int i){
    	if(i < this.taille())
    		return Character.getNumericValue(chiffres.charAt(chiffres.length() -1 -i));
    	return 0;
    }
	
    public int taille(){
    	return chiffres.length();
    }
	
	public int val() {
		return Integer.parseInt(this.chiffres);
	}
	
	public boolean estNul() {
		for(int i = 0; i < this.taille(); i++){
			if(this.chiffre(i) != 0){
				return false;
			}
		}
		return true;
	}

	public EtatNaturelPur predecesseur() {
		if(this.estNul()){
			throw new UnsupportedOperationException();
		}
		int t = this.taille();
		StringBuilder rep = new StringBuilder();
		int retenue = -1;
		for(int i = 0; i < t; i++){
			int chiffre = this.chiffre(i) + retenue;
			if(chiffre == -1){
				chiffre = 9;
				retenue = -1;
			}else{
				retenue = 0;
			}
			rep.append(Integer.toString(chiffre));
		}
		return this.creerNatAvecRepresentation(rep.reverse().toString());
	}	
	
	@Override
	public EtatNaturelPur creerNatAvecRepresentation(String repDecimal) {
		StringBuilder repMutable = new StringBuilder(repDecimal);
		repDecimal = new String(repMutable);
		if(repDecimal.equals("")){
			repDecimal = "0";
		}
		char min = Character.forDigit(0, 10);
		char max = Character.forDigit(9, 10);
		for(int i = 0; i < repDecimal.length(); i++){
			char c = repDecimal.charAt(i);
			if(c < min)	throw new IllegalArgumentException();
			if(c > max) throw new IllegalArgumentException();
		}
		return new NombreDecimal(repDecimal);
	}
}
