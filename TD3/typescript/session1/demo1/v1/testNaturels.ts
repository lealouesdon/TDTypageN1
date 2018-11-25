import {
    NatDecimal, NatParInt
} from "./naturels";

let x = new NatDecimal("75");
let unD = new NatDecimal("1");
console.log("150 ? " + x.somme(x).representation());
x = new NatDecimal("9999999999999999");
console.log("10000000000000000 ? " + x.somme(unD).representation());
let y = new NatParInt(85);
let un = new NatParInt(1);
console.log("170 ? " + y.somme(y).representation());
y = new NatParInt(9999999999999999);
console.log(y);
console.log(y.somme(un).getInt() === y.getInt());
try {
    let z = new NatDecimal("aze");
    console.log(z.representation());
} catch (e) {
    console.log("!!! erreur !!!");
}

//un = unD; // Erreur
//unD = un; // Erreur
