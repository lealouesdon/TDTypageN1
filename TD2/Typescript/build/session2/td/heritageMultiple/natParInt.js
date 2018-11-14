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
var intPositif_1 = require("./intPositif");
var NatParInt = /** @class */ (function (_super) {
    __extends(NatParInt, _super);
    function NatParInt(valeur) {
        return _super.call(this, valeur) || this;
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
    NatParInt.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    NatParInt.prototype.estNul = function () {
        return _super.prototype.val.call(this) === 0;
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
}(intPositif_1.IntPositif));
exports.NatParInt = NatParInt;
exports.natParInt = new NatParInt(0);
var NatParIntDecimal = /** @class */ (function (_super) {
    __extends(NatParIntDecimal, _super);
    function NatParIntDecimal(valeur) {
        return _super.call(this, valeur) || this;
    }
    NatParIntDecimal.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    NatParIntDecimal.prototype.toString = function () {
        return _super.prototype.representation.call(this);
    };
    return NatParIntDecimal;
}(intPositif_1.IntPositif));
exports.NatParIntDecimal = NatParIntDecimal;
var NatParIntRecursif = /** @class */ (function (_super) {
    __extends(NatParIntRecursif, _super);
    function NatParIntRecursif(valeur) {
        return _super.call(this, valeur) || this;
    }
    NatParIntRecursif.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    NatParIntRecursif.prototype.toString = function () {
        return _super.prototype.representation.call(this);
    };
    return NatParIntRecursif;
}(intPositif_1.IntPositif));
exports.NatParIntRecursif = NatParIntRecursif;
//# sourceMappingURL=natParInt.js.map