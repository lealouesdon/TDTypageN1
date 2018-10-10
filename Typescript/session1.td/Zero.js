"use strict";
exports.__esModule = true;
var Succ_1 = require("./Succ");
var NatParInt_1 = require("./NatParInt");
var Zero = /** @class */ (function () {
    function Zero() {
    }
    Zero.prototype.estNul = function () {
        return true;
    };
    Zero.prototype.predecesseur = function () {
        throw new Error("Pas de prédecesseur entier naturel à 0.");
    };
    Zero.prototype.chiffre = function (value) {
        return 0;
    };
    Zero.prototype.taille = function () {
        return 1;
    };
    Zero.prototype.val = function () {
        return 0;
    };
    Zero.prototype.creerNatAvecValeur = function (value) {
        if (value == 0) {
            return new Zero();
        }
        else {
            return NatParInt_1.NatParInt.FAB.creerNatAvecValeur(value);
        }
    };
    Zero.prototype.creerZero = function () {
        return this;
    };
    Zero.prototype.creerSuccesseur = function (nat) {
        return new Succ_1.Succ(nat);
    };
    Zero.prototype.creerNatAvecRepresentation = function (chaine) {
        if (Number(chaine) < 0) {
            throw new Error("Le nombre n'est pas un entier naturel (Zero creeRep)");
        }
        else {
            return this.creerNatAvecValeur(Number(chaine));
        }
    };
    Zero.prototype.somme = function (x) {
        return this.creerNatAvecValeur(x.val());
    };
    Zero.prototype.zero = function () {
        return this.creerZero();
    };
    Zero.prototype.produit = function (x) {
        return this.creerZero();
    };
    Zero.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    Zero.prototype.modulo = function (x) {
        return this.creerZero();
    };
    Zero.prototype.div = function (x) {
        return this.creerZero();
    };
    Zero.prototype.equals = function (x) {
        return x.val() == 0;
    };
    Zero.prototype.toString = function () {
        return String(this.val());
    };
    Zero.FAB = new NatParInt_1.NatParInt(0);
    return Zero;
}());
exports.Zero = Zero;
