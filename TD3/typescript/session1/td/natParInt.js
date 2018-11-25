"use strict";
exports.__esModule = true;
var NatParInt = /** @class */ (function () {
    function NatParInt(valeur) {
        this.valeur = valeur;
    }
    NatParInt.prototype.creerNatAvecValeur = function (valeur) {
        if (valeur < 0) {
            throw new Error('* Erreur : valeur négative.');
        }
        if (valeur % 1 !== 0) {
            throw new Error('* Erreur : valeur non entière.');
        }
        return new NatParInt(valeur);
    };
    NatParInt.prototype.creerZero = function () {
        return this.creerNatAvecValeur(0);
    };
    NatParInt.prototype.creerSuccesseur = function (predecesseur) {
        return this.creerNatAvecValeur(predecesseur.val() + 1);
    };
    NatParInt.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    NatParInt.prototype.val = function () {
        return this.valeur;
    };
    NatParInt.prototype.estNul = function () {
        return this.val() === 0;
    };
    NatParInt.prototype.predecesseur = function () {
        if (this.estNul()) {
            throw new Error("* Erreur : naturel nul sans prédécesseur.");
        }
        return this.creerNatAvecValeur(this.val() - 1);
    };
    NatParInt.prototype.taille = function () {
        return this.representation().length;
    };
    NatParInt.prototype.chiffre = function (i) {
        return parseInt(this.representation().charAt(this.taille() - 1 - i));
    };
    NatParInt.prototype.somme = function (x) {
        return this.creerNatAvecValeur(x.val() + this.val());
    };
    NatParInt.prototype.zero = function () {
        return this.creerZero();
    };
    NatParInt.prototype.produit = function (x) {
        return this.creerNatAvecValeur(x.val() * this.val());
    };
    NatParInt.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    NatParInt.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    NatParInt.prototype.div = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    NatParInt.prototype.representation = function () {
        return this.val().toString();
    };
    NatParInt.prototype.estEgal = function (n) {
        return n.val() == this.val();
    };
    return NatParInt;
}());
exports.NatParInt = NatParInt;
exports.natParInt = new NatParInt(0);
