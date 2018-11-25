import { Mot } from "./Mot";
import { Vide } from "./Vide";

export class Iterateur implements IterableIterator<string>{

    private var_reste: Mot;
    private var_caractere: string;

    constructor(mot: Mot){
        this.decomposer(mot);
    }

    decomposer(ens: Mot){
        while (true) {
			if (ens.estVide()) {
				this.var_reste = Vide.SINGLETON;
				break;
			}
			if (ens.casCons()) {
				this.var_reste = ens.reste();
				this.var_caractere = ens.caractere();
				break;
			}
			if (ens.casUnion()) {
				if (ens.gauche().estVide()) {
					ens = ens.droit();
					continue;
				} else if (ens.gauche().casCons()) {
					this.var_reste = ens.gauche().reste().unionIter(ens.droit());
					this.var_caractere = ens.gauche().caractere();
					break;
				} else {
					ens = ens.gauche().gauche().unionIter(ens.gauche().droit().unionIter(ens.droit()));
					continue;
				}
			}
		}
    }

    aSuivant(): boolean{
        return this.var_reste!=null;
    }

    suivant():string{
        if(this.var_reste.casVide()){
            throw new Error();
        } else {
            var c : string = this.var_caractere;
            this.decomposer(this.var_reste);
            return c;
        }
    }

    hasNext() : boolean {
        return this.aSuivant();
    }

    reste(): Mot{
        if(this.var_reste==null){
            throw new Error("UnsupportedOperationException");
        } else {
            return this.var_reste;
        }
    }


    next() : IteratorResult<string> {
		if (this.var_reste == null) {
			return {
                done: true,
                value: "" 
            }
        }
		var r = this.var_caractere;
		this.decomposer(this.var_reste);
        return {
            done: false,
            value: r
        }
    }

    [Symbol.iterator](): IterableIterator<string> {
        return this;
}


}