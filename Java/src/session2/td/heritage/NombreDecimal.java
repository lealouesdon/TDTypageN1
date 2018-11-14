package session2.td.heritage;

import session2.td.naturels.Nat;

public abstract class NombreDecimal implements Nat {
	private String nb;
	NombreDecimal(String nb){ this.nb = nb; }
	
	private static void nettoyer(StringBuilder s){
		int debut = 0;
		int fin = 0;
		while((fin < s.length()) && Character.getNumericValue(s.charAt(fin)) == 0){
			fin++;
		}
		s.delete(debut, fin);
	}
	
	public int chiffre(int i) {
		if( i< this.taille()) {
			return this.nb.charAt(this.taille()-1-i);
		} else {
			return 0;
		}
	}
	
	public int taille() {
		return this.nb.length();
	}
	
	public int val() {
		return Integer.parseInt(this.nb);
	}
	
	public boolean estNul() {
		return false;
	}
	
	public Nat predecesseur() {
		if(this.estNul()){
			throw new Error("0 n'a pas de prédécesseur");
		}
		int taille = this.taille();
		StringBuilder rep = new StringBuilder();
		int retenue = -1;
		for(int i = 0; i < taille; i++){
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
	
	public Nat creerSuccesseur(Nat predecesseur) {
		int t = predecesseur.taille();
		StringBuilder rep = new StringBuilder();
		nettoyer(rep);
		int retenue = 1;
		for(int i = 0; i < t; i++){
			int chiffre = predecesseur.chiffre(i) + retenue;
			if(chiffre > 9){
				chiffre = chiffre - 10;
				retenue = 1;
			}else{
				retenue = 0;
			}
			rep.append(Integer.toString(chiffre));
		}
		rep = retenue == 0 ? rep : rep.append(1);
		System.out.println("Predecesseur : "+ predecesseur.val());
		System.out.println("Passe ici"+ rep.reverse().toString());
		return new NatDecimal(rep.reverse().toString());
	}
	
	public Nat creerNatAvecValeur(int valeur) {
		return this.creerNatAvecRepresentation(Integer.toString(valeur));
	}
	
	public Nat creerZero() {
		return this.creerNatAvecRepresentation("0");
	}
	
}
