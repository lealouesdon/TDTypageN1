"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var natInductif_1 = require("./natInductif");
var natParInt_1 = require("./natParInt");
var EtatZero = /** @class */ (function () {
    function EtatZero() {
    }
    EtatZero.prototype.chiffre = function (i) {
        return 0;
    };
    EtatZero.prototype.taille = function () {
        return 0;
    };
    EtatZero.prototype.val = function () {
        return 0;
    };
    EtatZero.prototype.estNul = function () {
        return false;
    };
    EtatZero.prototype.predecesseur = function () {
        throw new Error("* Erreur : naturel nul sans prédécesseur.");
    };
    EtatZero.prototype.creerSuccesseur = function (predecesseur) {
        return new natInductif_1.SuccParInt(predecesseur);
    };
    EtatZero.prototype.creerNatAvecValeur = function (valeur) {
        if (valeur < 0) {
            throw new Error('* Erreur : valeur négative.');
        }
        if (valeur % 1 !== 0) {
            throw new Error('* Erreur : valeur non entière.');
        }
        return new natParInt_1.NatParInt(valeur);
    };
    EtatZero.prototype.creerZero = function () {
        return this;
    };
    EtatZero.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    EtatZero.prototype.somme = function (x) {
        return this.creerNatAvecValeur(x.val() + this.val());
    };
    EtatZero.prototype.zero = function () {
        return this.creerZero();
    };
    EtatZero.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    EtatZero.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    EtatZero.prototype.div = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    EtatZero.prototype.produit = function (x) {
        return this.creerNatAvecValeur(x.val() * this.val());
    };
    EtatZero.prototype.representation = function () {
        return this.val().toString();
    };
    EtatZero.prototype.estEgal = function (n) {
        return n.val() == this.val();
    };
    return EtatZero;
}());
exports.EtatZero = EtatZero;
//# sourceMappingURL=etatZero.js.map