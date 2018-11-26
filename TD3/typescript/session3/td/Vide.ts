import { Mot } from "./Mot";

export class Vide extends Mot{
    public static SINGLETON : Vide = new Vide();

    taille(): number {
        return 0;
    }

    casVide():boolean{
        return true;
    }


    
}