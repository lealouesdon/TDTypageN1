"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NatParInt = /** @class */ (function () {
    function NatParInt(val) {
        this.val = val;
        if (val < 0)
            throw new Error("nombre négatif");
        if (val !== Math.floor(val))
            throw new Error("nombre non entier");
    }
    NatParInt.prototype.somme = function (x) {
        return new NatParInt(this.getInt() + x.getInt());
    };
    NatParInt.prototype.getInt = function () {
        return this.val;
    };
    NatParInt.prototype.representation = function () {
        return this.val.toString();
    };
    NatParInt.prototype.representationJSON = function () {
        return {
            val: this.val
        };
    };
    return NatParInt;
}());
exports.NatParInt = NatParInt;
var NatDecimal = /** @class */ (function () {
    function NatDecimal(chiffres) {
        this.chiffres = chiffres;
        if (!parseInt(chiffres))
            throw new Error("représentation non décimale");
    }
    NatDecimal.prototype.somme = function (x) {
        var t = this.taille() < x.taille() ? x.taille() : this.taille();
        var rep = [];
        var retenue = 0;
        for (var i = 0; i < t; i++) {
            var chiffre = this.chiffre(i) + x.chiffre(i) + retenue;
            if (chiffre > 9) {
                chiffre = chiffre - 10;
                retenue = 1;
            }
            else {
                retenue = 0;
            }
            rep.push(chiffre.toString());
        }
        if (retenue !== 0) {
            rep.push("1");
        }
        return new NatDecimal(rep.reverse().join(""));
    };
    NatDecimal.prototype.chiffre = function (i) {
        if (i < this.taille())
            return parseInt(this.chiffres.charAt(this.taille() - 1 - i));
        return 0;
    };
    NatDecimal.prototype.taille = function () {
        return this.chiffres.length;
    };
    NatDecimal.prototype.representation = function () {
        return this.chiffres;
    };
    NatDecimal.prototype.representationJSON = function () {
        return {
            chiffres: this.chiffres
        };
    };
    return NatDecimal;
}());
exports.NatDecimal = NatDecimal;
//# sourceMappingURL=naturels.js.map