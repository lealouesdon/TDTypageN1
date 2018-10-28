"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var naturels_1 = require("./naturels");
var x = new naturels_1.NatDecimal("75");
var unD = new naturels_1.NatDecimal("1");
console.log("150 ? " + x.somme(x).representation());
x = new naturels_1.NatDecimal("9999999999999999");
console.log("10000000000000000 ? " + x.somme(unD).representation());
var y = new naturels_1.NatParInt(85);
var un = new naturels_1.NatParInt(1);
console.log("170 ? " + y.somme(y).representation());
y = new naturels_1.NatParInt(9999999999999999);
console.log(y);
console.log(y.somme(un).getInt() === y.getInt());
try {
    var z = new naturels_1.NatDecimal("aze");
    console.log(z.representation());
}
catch (e) {
    console.log("!!! erreur !!!");
}
//un = unD; // Erreur
//unD = un; // Erreur
//# sourceMappingURL=testNaturels.js.map