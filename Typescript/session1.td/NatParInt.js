"use strict";
exports.__esModule = true;
var NatParInt = /** @class */ (function () {
    function NatParInt(value) {
        this.value = value;
        if (value >= 0) {
            this.value = value;
        }
        else {
            throw new Error("Le nombre n'est pas un entier naturel");
        }
    }
    NatParInt.prototype.getVal = function () {
        return this.value;
    };
    NatParInt.prototype.estNul = function () {
        if (this.val() == 0) {
            return true;
        }
        else if (this.val() > 0) {
            return false;
        }
        else {
            throw new Error("Le nombre n'est pas un entier naturel");
        }
    };
    NatParInt.prototype.predecesseur = function () {
        if (this.estNul()) {
            throw new Error("Le predecesseur n'est pas un entier naturel");
        }
        else {
            return new NatParInt(this.val() - 1);
        }
    };
    NatParInt.prototype.chiffre = function (value) {
        var s = String(this.val());
        return Number(String(s.charAt(value)));
    };
    NatParInt.prototype.taille = function () {
        return String(this.val()).length;
    };
    NatParInt.prototype.val = function () {
        return this.getVal();
    };
    NatParInt.prototype.creerNatAvecValeur = function (value) {
        if (value < 0) {
            throw new Error("Le nombre n'est pas un entier naturel");
        }
        else {
            return new NatParInt(value);
        }
    };
    NatParInt.prototype.creerZero = function () {
        return new NatParInt(0);
    };
    NatParInt.prototype.creerSuccesseur = function (nat) {
        return new NatParInt(nat.val() + 1);
    };
    NatParInt.prototype.creerNatAvecRepresentation = function (chaine) {
        if (Number(chaine) < 0) {
            throw new Error("Le nombre n'est pas un entier naturel");
        }
        else {
            return this.creerNatAvecValeur(Number(chaine));
        }
    };
    NatParInt.prototype.somme = function (x) {
        return new NatParInt(this.val() + x.val());
    };
    NatParInt.prototype.zero = function () {
        return this.creerZero();
    };
    NatParInt.prototype.produit = function (x) {
        return new NatParInt(this.val() * x.val());
    };
    NatParInt.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    NatParInt.prototype.modulo = function (x) {
        if (x.val() != 0) {
            return new NatParInt(this.val() % x.val());
        }
        else {
            throw new Error("Division par zéro");
        }
    };
    NatParInt.prototype.div = function (x) {
        if (x.val() != 0) {
            return new NatParInt(this.val() / x.val());
        }
        else {
            throw new Error("Divison par zéro");
        }
    };
    NatParInt.prototype.toString = function () {
        return String(this.val());
    };
    NatParInt.prototype.equals = function (nat) {
        if (nat.val() == this.val()) {
            return true;
        }
        else {
            return false;
        }
    };
    NatParInt.FAB = new NatParInt(0);
    return NatParInt;
}());
exports.NatParInt = NatParInt;
