//Partie 2 : L'absence de sûreté
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var variance;
(function (variance) {
    var A = /** @class */ (function () {
        function A() {
        }
        return A;
    }());
    var B = /** @class */ (function (_super) {
        __extends(B, _super);
        function B() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        B.prototype.f = function () { };
        return B;
    }(A));
    function produireErreurParCovariance() {
        var a = new A();
        var b = new B();
        a = b;
    }
    function produireErreurParContravariance() {
        // A compléter.
        // Utiliser la conversion explicite "<Array<B>>t" pour convertir "t: Array<A>". 
        var listA = new Array();
        listA.push(new A());
        var listB = new Array();
        listB = listA;
        listB[0].f();
    }
    try {
        produireErreurParContravariance();
    }
    catch (e) {
        console.log(e);
    }
    console.log("********************************************************");
    try {
        produireErreurParCovariance();
    }
    catch (e) {
        console.log(e);
    }
})(variance || (variance = {}));
//# sourceMappingURL=surete.js.map