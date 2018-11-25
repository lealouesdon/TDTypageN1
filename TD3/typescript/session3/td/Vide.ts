import { Mot } from "./Mot";

export class Vide extends Mot{
    public static SINGLETON : Vide;

    taille(): number {
        return 0;
    }

    casVide():boolean{
        return true;
    }


    
}