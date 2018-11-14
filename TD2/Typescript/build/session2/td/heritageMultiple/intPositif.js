"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var natInductif_1 = require("./natInductif");
var IntPositif = /** @class */ (function () {
    function IntPositif(nb) {
        this.nb = nb;
    }
    IntPositif.prototype.chiffre = function (i) {
        return parseInt(this.representation().charAt(this.taille() - 1 - i));
        ;
    };
    IntPositif.prototype.taille = function () {
        return this.representation().length;
    };
    IntPositif.prototype.val = function () {
        return this.nb;
    };
    IntPositif.prototype.estNul = function () {
        return false;
    };
    IntPositif.prototype.predecesseur = function () {
        return this.creerNatAvecValeur(this.val() - 1);
    };
    IntPositif.prototype.creerSuccesseur = function (predecesseur) {
        return new natInductif_1.SuccParInt(predecesseur);
    };
    IntPositif.prototype.creerNatAvecValeur = function (valeur) {
        if (valeur === 0) {
            return this.creerZero();
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(valeur - 1));
    };
    IntPositif.prototype.creerZero = function () {
        return new natInductif_1.ZeroParInt();
    };
    IntPositif.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    IntPositif.prototype.somme = function (x) {
        return this.creerNatAvecValeur(x.val() + this.val());
    };
    IntPositif.prototype.zero = function () {
        return this.creerZero();
    };
    IntPositif.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    IntPositif.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    IntPositif.prototype.div = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    IntPositif.prototype.produit = function (x) {
        return this.creerNatAvecValeur(x.val() * this.val());
    };
    IntPositif.prototype.representation = function () {
        return this.val().toString();
    };
    IntPositif.prototype.estEgal = function (n) {
        return n.val() == this.val();
    };
    return IntPositif;
}());
exports.IntPositif = IntPositif;
//# sourceMappingURL=intPositif.js.map