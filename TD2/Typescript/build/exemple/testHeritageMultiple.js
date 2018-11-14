"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var heritageInterfacesconcretes_1 = require("./heritageInterfacesconcretes");
// Classe donnant une implémentation par défaut
var A_defaut = /** @class */ (function () {
    function A_defaut() {
    }
    A_defaut.prototype.f = function () {
        console.log("f.A");
    };
    return A_defaut;
}());
var B_defaut = /** @class */ (function () {
    function B_defaut() {
    }
    B_defaut.prototype.g = function () {
        console.log("g.B");
    };
    return B_defaut;
}());
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
// Récupération du code par défaut sans répétition du code
heritageInterfacesconcretes_1.heriterInterfacesConcretes(C, [A_defaut, B_defaut]);
var c = new C();
c.f();
c.g();
var c1 = new C();
console.log("identité des méthodes ? " + (c.f === c1.f));
//# sourceMappingURL=testHeritageMultiple.js.map