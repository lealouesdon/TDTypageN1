"use strict";
exports.__esModule = true;
var Zero_1 = require("./session1.td/Zeroo");
var NatParInt_1 = require("../NatParInttd/NatParInt");
var Succ = /** @class */ (function () {
    function Succ(pred) {
        this.pred = pred;
        this.pred = pred;
    }
    Succ.prototype.estNul = function () {
        return false;
    };
    Succ.prototype.predecesseur = function () {
        console.log("Valeur actuelle avant return : " + this.val());
        return this.pred;
    };
    Succ.prototype.chiffre = function (value) {
        return Number(String(this.val()).charAt(value));
    };
    Succ.prototype.taille = function () {
        return String(this.val()).length;
    };
    Succ.prototype.val = function () {
        return this.pred.val() + 1;
    };
    Succ.prototype.creerNatAvecValeur = function (value) {
        // return this.creerSuccesseur(this.creerNatAvecValeur(value-1));
        if (value == 0) {
            return new Zero_1.Zero();
        }
        else {
            return NatParInt_1.NatParInt.FAB.creerNatAvecValeur(value);
        }
    };
    Succ.prototype.creerZero = function () {
        return this.creerNatAvecValeur(0);
    };
    Succ.prototype.creerSuccesseur = function (nat) {
        return new Succ(nat);
    };
    Succ.prototype.creerNatAvecRepresentation = function (chaine) {
        if (Number(chaine) < 0) {
            throw new Error("Le nombre n'est pas un entier naturel (Succ repre)");
        }
        else {
            return this.creerNatAvecValeur(Number(chaine));
        }
    };
    Succ.prototype.somme = function (x) {
        console.log("Passe par somme de succ");
        console.log("Valeur de this.val() : " + this.val().toString());
        console.log("Valeur de x.val() : " + x.val().toString());
        return this.creerNatAvecValeur(this.val() + x.val());
    };
    Succ.prototype.zero = function () {
        return this.creerZero();
    };
    Succ.prototype.produit = function (x) {
        return this.creerNatAvecValeur(this.val() * x.val());
    };
    Succ.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    Succ.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    Succ.prototype.div = function (x) {
        return this.creerNatAvecValeur(this.val() / x.val());
    };
    Succ.prototype.equals = function (nat) {
        if (nat.val() == this.val()) {
            return true;
        }
        else {
            return false;
        }
    };
    Succ.prototype.toString = function () {
        return String(this.val());
    };
    Succ.FAB = new NatParInt_1.NatParInt(0);
    return Succ;
}());
exports.Succ = Succ;
