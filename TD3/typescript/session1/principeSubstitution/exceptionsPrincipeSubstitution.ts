namespace exceptionVisibilite {
    class A {
        protected f(): void { }
        testA(x: A) {
            x.f();
        }
        testB(x: B) {
            // x.f();// Erreur
            (<A>x).f(); // Remède : une conversion explicite
        }
    }
    class B extends A {
        protected f(): void { }
    }
}


namespace exceptionDroitsAcces {
    class A {
        p: string;
    }
    class B extends A {
        readonly p: string;
    }
    function testA(x: A): void {
        x.p = "problème !";
    }
    function testB(x: B): void {
        // x.p = "problème !"; // Erreur : 'p' en lecture seulement
        (<A>x).p = "problème !"; // Remède : une conversion explicite
    }
}
