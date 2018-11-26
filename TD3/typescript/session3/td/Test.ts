import { Vide } from "./Vide";
import { Mot } from "./Mot";
import { LastOccurence } from "./LastOccurence";
import { Representation } from "./Representation";
import { CharAt } from "./CharAt";
import { ToUpperCase } from "./ToUpperCase";

console.log("-------Test Recursif---------------------------------");
testRec();
console.log("-------Test Iteratif---------------------------------");
testIter();


function testRec(){
    var b = Vide.SINGLETON;

    b = b.unionRec(Vide.SINGLETON.consRec('e'));
    b = b.unionRec(Vide.SINGLETON.consRec('e'));
    b = b.unionRec(Vide.SINGLETON.consRec('e'));
    b = b.unionRec(Vide.SINGLETON.consRec('e'));
    b = b.unionRec(Vide.SINGLETON.consRec('e'));
    b = b.unionRec(Vide.SINGLETON.consRec('e'));

    console.log("-------Union---------");
    test(b);
    console.log("-------Cons---------");
    test(b);

    console.log("-------Vide---------");
    var c = Vide.SINGLETON;
    test(c);
}

function testIter(){
    var b = Vide.SINGLETON;

    b = b.unionIter(Vide.SINGLETON.consIter('e'));

    console.log("-------Union---------");
    test(b);
    console.log("-------Cons---------");
    test(b);

    console.log("-------Vide---------");
    var c = Vide.SINGLETON;
    test(c);
}

function tailleRec(ens:Mot):number{
    return ens.filtrageRecursif(() => 0, (elt, reste) => 1 + tailleRec(reste));
}

function taille(ens:Mot):number{
    return ens.filtrage(() => 0, (elt, reste) => (tailleReste => 1+ tailleReste));
}

function test(m:Mot){
    var r = new Representation();
    var ch = new CharAt(0);
    var tuc = new ToUpperCase();
    var last = new LastOccurence('e');
    // console.log("Mot : " + m.accueil(r));
	// console.log("Mot recursif : " + m.accueilRecursif(r));
	console.log("Est vide ? "+m.casVide());
	console.log("Taille ? "+m.taille());
	console.log("Taille ? "+taille(m));
	console.log("Taille Recursive ? "+tailleRec(m));
	console.log("Caractère a la place 0 : "+m.accueil(ch));
    console.log("Derniere occurence de e : "+m.accueil(last));
    console.log("En majuscule : "+m.accueil(tuc));
    console.log("PASSE PAR ICI");
    console.log("En majuscule (aceuil recursif) : "+m.accueilRecursif(tuc));
}