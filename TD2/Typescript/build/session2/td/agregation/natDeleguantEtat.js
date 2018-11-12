"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var natInductif_1 = require("./natInductif");
var NatDeleguantEtat = /** @class */ (function () {
    function NatDeleguantEtat(etatNat) {
        this.etatNat = etatNat;
    }
    NatDeleguantEtat.prototype.etat = function () {
        return this.etatNat;
    };
    NatDeleguantEtat.prototype.val = function () {
        return this.etatNat.val();
    };
    NatDeleguantEtat.prototype.estNul = function () {
        return this.etatNat.estNul();
    };
    NatDeleguantEtat.prototype.predecesseur = function () {
        return this.etatNat.predecesseur();
    };
    NatDeleguantEtat.prototype.taille = function () {
        return this.etatNat.taille();
    };
    NatDeleguantEtat.prototype.chiffre = function (i) {
        return this.etatNat.chiffre(i);
    };
    NatDeleguantEtat.prototype.creerNatAvecValeur = function (valeur) {
        return new NatCalculantAvecDesInts(this.etat().creerNatAvecValeur(valeur));
    };
    NatDeleguantEtat.prototype.creerZero = function () {
        return new NatCalculantAvecDesInts(this.etat().creerZero());
    };
    NatDeleguantEtat.prototype.creerSuccesseur = function (predecesseur) {
        return new NatCalculantAvecDesInts(this.etat().creerSuccesseur(this.etat()));
    };
    NatDeleguantEtat.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return new NatCalculantAvecDesNombresDecimaux(this.etat().creerNatAvecRepresentation(repDecimale));
    };
    return NatDeleguantEtat;
}());
exports.NatDeleguantEtat = NatDeleguantEtat;
var NatCalculantAvecDesNombresDecimaux = /** @class */ (function (_super) {
    __extends(NatCalculantAvecDesNombresDecimaux, _super);
    function NatCalculantAvecDesNombresDecimaux(etatNat) {
        return _super.call(this, etatNat) || this;
    }
    NatCalculantAvecDesNombresDecimaux.prototype.creerNatAvecEtat = function (etat) {
        return new NatCalculantAvecDesNombresDecimaux(etat);
    };
    NatCalculantAvecDesNombresDecimaux.prototype.somme = function (nb) {
        return new NatCalculantAvecDesNombresDecimaux(_super.prototype.etat.call(this).creerNatAvecRepresentation(String(this.val() + nb.val())));
    };
    NatCalculantAvecDesNombresDecimaux.prototype.zero = function () {
        return new NatCalculantAvecDesNombresDecimaux(_super.prototype.etat.call(this).creerZero());
    };
    NatCalculantAvecDesNombresDecimaux.prototype.produit = function (nb) {
        return new NatCalculantAvecDesNombresDecimaux(_super.prototype.etat.call(this).creerNatAvecRepresentation(String(this.val() * nb.val())));
    };
    NatCalculantAvecDesNombresDecimaux.prototype.un = function () {
        return new NatCalculantAvecDesNombresDecimaux(_super.prototype.etat.call(this).creerNatAvecValeur(1));
    };
    NatCalculantAvecDesNombresDecimaux.prototype.modulo = function (nb) {
        return new NatCalculantAvecDesNombresDecimaux(_super.prototype.etat.call(this).creerNatAvecRepresentation(String(this.val() % nb.val())));
    };
    NatCalculantAvecDesNombresDecimaux.prototype.div = function (nb) {
        return new NatCalculantAvecDesNombresDecimaux(_super.prototype.etat.call(this).creerNatAvecRepresentation(String(this.val() / nb.val())));
    };
    /*equals(obj : Object) : boolean {
        return
    }*/
    NatCalculantAvecDesNombresDecimaux.prototype.toString = function () {
        return String(this.val());
    };
    return NatCalculantAvecDesNombresDecimaux;
}(NatDeleguantEtat));
exports.NatCalculantAvecDesNombresDecimaux = NatCalculantAvecDesNombresDecimaux;
var NatCalculantAvecDesInts = /** @class */ (function (_super) {
    __extends(NatCalculantAvecDesInts, _super);
    function NatCalculantAvecDesInts(etatNat) {
        return _super.call(this, etatNat) || this;
    }
    NatCalculantAvecDesInts.prototype.creerNatAvecEtat = function (etat) {
        return new NatCalculantAvecDesInts(etat);
    };
    NatCalculantAvecDesInts.prototype.somme = function (nb) {
        return new NatCalculantAvecDesInts(_super.prototype.etat.call(this).creerNatAvecValeur(this.val() + nb.val()));
    };
    NatCalculantAvecDesInts.prototype.zero = function () {
        return new NatCalculantAvecDesInts(_super.prototype.etat.call(this).creerZero());
    };
    NatCalculantAvecDesInts.prototype.produit = function (nb) {
        return new NatCalculantAvecDesInts(_super.prototype.etat.call(this).creerNatAvecValeur(this.val() * nb.val()));
    };
    NatCalculantAvecDesInts.prototype.un = function () {
        return new NatCalculantAvecDesInts(_super.prototype.etat.call(this).creerNatAvecValeur(1));
    };
    NatCalculantAvecDesInts.prototype.modulo = function (nb) {
        return new NatCalculantAvecDesInts(_super.prototype.etat.call(this).creerNatAvecValeur(this.val() % nb.val()));
    };
    NatCalculantAvecDesInts.prototype.div = function (nb) {
        return new NatCalculantAvecDesInts(_super.prototype.etat.call(this).creerNatAvecValeur(this.val() / nb.val()));
    };
    /*equals(obj : Object) : boolean {

    }*/
    NatCalculantAvecDesInts.prototype.toString = function () {
        return String(this.val());
    };
    return NatCalculantAvecDesInts;
}(NatDeleguantEtat));
exports.NatCalculantAvecDesInts = NatCalculantAvecDesInts;
exports.NatCalculantAvecDesNombresDecimauxZ = new NatCalculantAvecDesNombresDecimaux(new natInductif_1.ZeroInductif());
exports.NatCalculantAvecDesIntsZ = new NatCalculantAvecDesInts(new natInductif_1.ZeroInductif());
//# sourceMappingURL=natDeleguantEtat.js.map