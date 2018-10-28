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
    var z_1 = new naturels_1.NatDecimal("aze");
    console.log(z_1.representation());
}
catch (e) {
    console.log("!!! erreur !!!");
}
// Calculs sur les types réalisés par le compilateur de Typescript
// Pour examiner le type attribué à n, taper 'n' pour observer son type.
// Voir les commentaires.
var n = unD; // n : NatDecimal
n = un; // n : NatParInt
n = unD; // n : NatDecimal
var z = 3;
if (z < 4) {
    n = un; // n : NatParInt
}
else {
    n = unD; // n : NatDecimal
}
// n : Nat
console.log(n.representationJSON());
// n.representationJSON() : FormatNatParInt | FormatNatDecimal
if (n instanceof naturels_1.NatParInt) {
    console.log(n.representationJSON()); // n : NatParInt
}
else {
    console.log(n.representationJSON()); // n : NatDecimal
}
//# sourceMappingURL=testNaturels.js.map