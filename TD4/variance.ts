// Partie 1 : Variance
class A {f(): void { } }
class B extends A {
    f(): void { }
}

// Covariance
interface Liste1<T> {
    tete(): T;
    reste(): Liste1<T>;
}
function covariance1(l: Liste1<B>): Liste1<A> {
    return l;
}
function contravariance1(l: Liste1<A>): Liste1<B> {
    return l; //pas contravariant
}

// Convariance
interface Liste2<T> {
    tete(): T;
    reste(): Liste2<T>;
    cons(t: T): Liste2<T>; // fabrique
}
function covariance2(l: Liste2<B>): Liste2<A> {
    return l;
}
function contravariance2(l: Liste2<A>): Liste2<B> {
    return l; //pas contravariant
}
// Bivariance
interface Liste3<T> {
    setTete(t: T): void
    reste(): Liste3<T>;
}
function covariance3(l: Liste3<B>): Liste3<A> {
    return l;
}
function contravariance3(l: Liste3<A>): Liste3<B> {
    return l;
}
// Covariance
interface Liste4<T> {
    tete(): T;
    setTete(t: T): void
    reste(): Liste4<T>;
    cons(t: T): Liste4<T>;
}
function covariance4(l: Liste4<B>): Liste4<A> {
    return l;
}
function contravariance4(l: Liste4<A>): Liste4<B> {
    return l; //pas contravariant
}
