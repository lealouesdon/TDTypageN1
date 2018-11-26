import { Visiteur } from "./Visiteur";

export class Representation implements Visiteur<string>{

    casVide():string{
        return "";
    }

    casCons(n:string, r:string):string{
        return n+r;
    }
}