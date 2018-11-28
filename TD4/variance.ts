// Partie 1 : Variance

// Covariance
interface Liste1<T> {
    tete(): T;
    reste(): Liste1<T>;
}
// Invariance
interface Liste2<T> {
    tete(): T;
    reste(): Liste2<T>;
    cons(t: T): Liste2<T>; // fabrique
}
// Contravariance
interface Liste3<T> {
    setTete(t: T): void
    reste(): Liste3<T>;
}
// 
interface Liste4<T> {
    tete(): T;
    setTete(t: T): void
    reste(): Liste4<T>;
    cons(t: T): Liste4<T>;
}

//Exemple
class A { f(): void { } }
class B extends A {
    f(): void { }
}

function covariance1(l: Liste1<B>): Liste1<A> {
    return l;
}
function contravariance1(l: Liste1<A>): Liste1<B> {
    return l;
}