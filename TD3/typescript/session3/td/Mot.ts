import { Vide } from "./Vide";
import { Iterateur } from "./Iterateur";
import { Cons } from "./Cons";
import { UnionIter } from "./UnionIter"
import { UnionRec } from "./UnionRec";
import { ConsIter } from "./ConsIter";
import { ConsRec } from "./ConsRec";


export abstract class Mot implements Iterable<string>{

    //Sélecteurs
    casVide(): boolean{
        return false;
    }
    casCons(): boolean {
        return false;
    }
    casUnion() : boolean{
        return false;
    }


    // Destructeurs
	caractere(): string{
		throw new Error('UnsupportedOperationException');
    }
    reste(): Mot{
		throw new Error('UnsupportedOperationException');
    }
    gauche(): Mot{
		throw new Error('UnsupportedOperationException');
    }
    droit(): Mot{
		throw new Error('UnsupportedOperationException');
    }
        
    // Constructeurs
	vide(): Mot{
		return Vide.SINGLETON; 
	}
	cons(n: string): Mot{
		return new Cons(n, this);
    }
    
    unionIter(ens:Mot):Mot{
        return new UnionIter(this,ens);
    }

    unionRec(ens:Mot):Mot{
        return new UnionRec(this,ens);
    }

    consIter(n:string){
        return new ConsIter(n, this);
    }
    
    consRec(n:string){
        return new ConsRec(n, this);
    }

    //accesseurs
    abstract taille(): number;

    estVide(): boolean {
        return this.taille() == 0;
    }

    iterateur(): Iterateur{
        return new Iterateur(this);
    }

    [Symbol.iterator](): Iterator<string> {
		return this.iterateur();
}

}