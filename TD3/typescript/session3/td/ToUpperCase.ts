import { Visiteur } from "./Visiteur";

export class ToUpperCase implements Visiteur<string>{
    casCons(l: string, r: string): string {
        if(l!=undefined){
            var upperCaseStr: string = l.toUpperCase() + r.toUpperCase();
        return upperCaseStr;
        } else {
            return "";
        }
    }
    casVide(): string {
        return "";
    }


}