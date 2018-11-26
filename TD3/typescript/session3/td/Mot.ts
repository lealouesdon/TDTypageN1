


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

    //visiteurs
    accueilRecursif<T>(v:Visiteur<T>): T{
        if(this.casVide()){
            return v.casVide();
        }
        return v.casCons(this.caractere(), this.reste().accueilRecursif(v));
    }

    accueil<T>(v:Visiteur<T>): T{
        var r: T = v.casVide();
        for(var x of this){
            console.log("x : ", x, "this : ", this);
            r = v.casCons(x, r);
            return r;
        }
        return r;
    }

    filtrage<T>(casVide: () => T, casCons : (string, Mot) => ((T) => T)): T {
        var r: T = casVide();
        var arg: Mot = this.vide();
        var courant: Mot = this;
        while (!courant.estVide()) {
            var e: string = courant.caractere();
            r = casCons(e, arg)(r);
            arg = arg.consIter(e);
            courant = courant.reste();
        }
        return r;
    }

    filtrageRecursif<T> (casVide: () => T, casCons : (string, Mot) => T): T {
        if(this.estVide()){
            return casVide();
        }
        return casCons(this.caractere(), this.reste());
    }
    
    representation(): string {
        return this.filtrageRecursif(
            () => "",
            (lettre, reste) => lettre + this.reste().representation()
        );
	}


}

import { Vide } from "./Vide";
import { Iterateur } from "./Iterateur";
import { UnionIter } from "./UnionIter"
import { UnionRec } from "./UnionRec";
import { ConsIter } from "./ConsIter";
import { ConsRec } from "./ConsRec";
import { Visiteur } from "./Visiteur";