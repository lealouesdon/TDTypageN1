//Partie 2 : L'absence de sûreté

namespace variance {
    class A { }

    class B extends A {
        f(): void { }
    }

    function produireErreurParCovariance(): void {
      var a = new A();
      var b = new B();
      a = b; 
      //a.f();
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