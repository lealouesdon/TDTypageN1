interface ModuleFile<F,E>{
    vide():F;
    ajout(e:E, f:F):F;
    retrait(f:F):[E, F];
    estVide(f:F):boolean;
}

interface Liste<E>{
    filtrage<R>(casVide: () => R, casCons: (t: E, r: Liste<E>) => R): R;
}

class ListeVide<E> implements Liste<E>{
    filtrage<R>(casVide: () => R, casCons: (t: E, r: Liste<E>) => R): R {
        return casVide();
    }
}

class ListeCons<E> implements Liste<E>{

    constructor(private tete:E, private reste: Liste<E>){}
    
    filtrage<R>(casVide: () => R, casCons: (t: E, r: Liste<E>) => R): R {
        return casCons(this.tete, this.reste);
    }

    getTete():E{
        return this.tete;
    }
    getReste():Liste<E>{
        return this.reste;
    }
}

function vide<E>(): Liste<E>{
    return new ListeVide();
}

function cons<E>(tete:E, reste:Liste<E>): Liste<E>{
    return new ListeCons(tete, reste);
}

function reverse<E>(liste:Liste<E>){ 
    
}

function reverseInductive<E>(liste:ListeCons<E>){
    
}

class ModuleFileParListe<E> implements ModuleFile<Liste<E>, E>{

    constructor(private list:Liste<E>){}
    
    vide(): Liste<E> {
        return new ListeVide();
    }
    ajout(e: E, f: Liste<E>): Liste<E> {
        throw new Error("Method not implemented.");
    }
    retrait(f: Liste<E>): [E, Liste<E>] {
        throw new Error("");
    }
    estVide(f: Liste<E>): boolean {
        throw new Error("Method not implemented.");
    }
}

class ModuleFileParDeuxListes<E> implements ModuleFile<[Liste<E>, Liste<E>], E>{
    vide(): [Liste<E>, Liste<E>] {
        throw new Error("Method not implemented.");
    }    ajout(e: E, f: [Liste<E>, Liste<E>]): [Liste<E>, Liste<E>] {
        throw new Error("Method not implemented.");
    }
    retrait(f: [Liste<E>, Liste<E>]): [E, [Liste<E>, Liste<E>]] {
        throw new Error("Method not implemented.");
    }
    estVide(f: [Liste<E>, Liste<E>]): boolean {
        throw new Error("Method not implemented.");
    }


}