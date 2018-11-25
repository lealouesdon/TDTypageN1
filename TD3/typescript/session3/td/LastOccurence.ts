import { Visiteur } from "./Visiteur";

export class LastOccurence implements Visiteur<number>{

    public lastOccurence:number;
    public charRecherche:string;
    public cpt=0;

    public constructor(charRecherche:string){
        this.charRecherche=charRecherche;
        this.cpt=0;
    }

    casVide(): number {
        return this.lastOccurence;
    }

    casCons(n:string, r:number):number{
        if(n==this.charRecherche) {
			this.lastOccurence = this.cpt;
		}
		this.cpt++;
    return this.lastOccurence;
    }


}