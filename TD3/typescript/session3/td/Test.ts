import { Vide } from "./Vide";
import { Mot } from "./Mot";

export class Test{
    static main(args: String[]):void{
        var a:Mot = Vide.SINGLETON.cons('a');
        var b:Mot = Vide.SINGLETON;

        for(var i = 0; i < 1000; i++) {
            b = b.union(a);
        }

        console.log(b);
    }
}