"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var natInductif_1 = require("./natInductif");
var natParInt_1 = require("./natParInt");
var EtatSucc = /** @class */ (function () {
    function EtatSucc(pred) {
        this.pred = pred;
    }
    EtatSucc.prototype.chiffre = function (i) {
        return parseInt(this.representation().charAt(this.taille() - 1 - i));
        ;
    };
    EtatSucc.prototype.taille = function () {
        return this.representation().length;
    };
    EtatSucc.prototype.val = function () {
        return this.pred.val() - 1;
    };
    EtatSucc.prototype.estNul = function () {
        return false;
    };
    EtatSucc.prototype.predecesseur = function () {
        return this.pred;
    };
    EtatSucc.prototype.creerSuccesseur = function (predecesseur) {
        return new natInductif_1.SuccParInt(predecesseur);
    };
    EtatSucc.prototype.creerNatAvecValeur = function (valeur) {
        if (valeur < 0) {
            throw new Error('* Erreur : valeur négative.');
        }
        if (valeur % 1 !== 0) {
            throw new Error('* Erreur : valeur non entière.');
        }
        return new natParInt_1.NatParInt(valeur);
    };
    EtatSucc.prototype.creerZero = function () {
        return new natInductif_1.ZeroParInt();
    };
    EtatSucc.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    EtatSucc.prototype.somme = function (x) {
        return this.creerNatAvecValeur(x.val() + this.val());
    };
    EtatSucc.prototype.zero = function () {
        return this.creerZero();
    };
    EtatSucc.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    EtatSucc.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    EtatSucc.prototype.div = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    EtatSucc.prototype.produit = function (x) {
        return this.creerNatAvecValeur(x.val() * this.val());
    };
    EtatSucc.prototype.representation = function () {
        return this.val().toString();
    };
    EtatSucc.prototype.estEgal = function (n) {
        return n.val() == this.val();
    };
    return EtatSucc;
}());
exports.EtatSucc = EtatSucc;
//# sourceMappingURL=etatSucc.js.map