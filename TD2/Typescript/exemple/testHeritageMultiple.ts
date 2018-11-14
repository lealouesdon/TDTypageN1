import {
    heriterInterfacesConcretes
} from "./heritageInterfacesconcretes"

interface A {
    f(): void;
}

// Classe donnant une implémentation par défaut
class A_defaut implements A {
    f(): void {
        console.log("f.A")
    }
}

interface B {
    g(): void;
}

class B_defaut implements B {
    g() {
        console.log("g.B")
    }
}

class C implements A, B {
    // Déclaration nécessaire sous la forme d'attributs fonctionnels
    // -> Répétition des déclarations
    f: () => void;
    g: () => void;
}

// Récupération du code par défaut sans répétition du code
heriterInterfacesConcretes(C, [A_defaut, B_defaut]);

let c = new C();
c.f();
c.g();
let c1 = new C();
console.log("identité des méthodes ? " + (c.f === c1.f))