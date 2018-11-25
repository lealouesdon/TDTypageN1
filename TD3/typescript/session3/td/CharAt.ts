import { Visiteur } from "./Visiteur"

export class CharAt implements Visiteur<string> {

    private index : number;
    private compteur : number = 0;
    private charTrouve : string;

    public constructor(index : number) {
        this.index = index;
    }

    public casVide() : string {
        return this.charTrouve;
    }

    public casCons(n : string, r : string) : string {
        if (this.compteur == this.index) {
            this.compteur++;
            this.charTrouve = n;
            return n;
        } else {
            this.compteur++;
            return r;
        }
    }
}