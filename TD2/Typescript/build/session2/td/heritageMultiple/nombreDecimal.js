"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var natInductif_1 = require("./natInductif");
var NombreDecimal = /** @class */ (function () {
    function NombreDecimal(nb) {
        this.nb = nb;
    }
    NombreDecimal.prototype.chiffre = function (i) {
        return parseInt(this.nb.charAt(this.taille() - 1 - i));
        ;
    };
    NombreDecimal.prototype.taille = function () {
        return this.nb.length;
    };
    NombreDecimal.prototype.val = function () {
        return parseInt(this.nb);
    };
    NombreDecimal.prototype.estNul = function () {
        return false;
    };
    NombreDecimal.prototype.predecesseur = function () {
        return this.creerNatAvecValeur(this.val() - 1);
    };
    NombreDecimal.prototype.creerSuccesseur = function (predecesseur) {
        return new natInductif_1.SuccParInt(predecesseur);
    };
    NombreDecimal.prototype.creerNatAvecValeur = function (valeur) {
        if (valeur === 0) {
            return this.creerZero();
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(valeur - 1));
    };
    NombreDecimal.prototype.creerZero = function () {
        return new natInductif_1.ZeroParInt();
    };
    NombreDecimal.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    NombreDecimal.prototype.somme = function (x) {
        return this.creerNatAvecValeur(x.val() + this.val());
    };
    NombreDecimal.prototype.zero = function () {
        return this.creerZero();
    };
    NombreDecimal.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    NombreDecimal.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    NombreDecimal.prototype.div = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    NombreDecimal.prototype.produit = function (x) {
        return this.creerNatAvecValeur(x.val() * this.val());
    };
    NombreDecimal.prototype.representation = function () {
        return this.val().toString();
    };
    NombreDecimal.prototype.estEgal = function (n) {
        return n.val() == this.val();
    };
    return NombreDecimal;
}());
exports.NombreDecimal = NombreDecimal;
//# sourceMappingURL=nombreDecimal.js.map