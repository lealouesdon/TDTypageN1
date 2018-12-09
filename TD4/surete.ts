//Partie 2 : L'absence de sûreté

namespace variance {
    class A { }

    class B extends A {
        f(): void { }
    }

    function produireErreurParCovariance(): void {
        let arrayB : Array<A> = new Array<B>() ;
        let b1 : B = new B() ;
        arrayB.push(b1) ;
        arrayB[0].f();
    }

    function produireErreurParContravariance(): void {
      // A compléter.
      // Utiliser la conversion explicite "<Array<B>>t" pour convertir "t: Array<A>". 
      var listA = new Array<A>();
      listA.push(new A());
      var listB = new Array<B>();
      listB = <Array<B>>listA;
      listB[0].f();
      
    }

    try {
        produireErreurParContravariance();
    } catch (e) {
        console.log(e);
    }
    console.log("********************************************************");
    try {
        produireErreurParCovariance();
    } catch (e) {
        console.log(e);
    }

}