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
var naturels_1 = require("./naturels");
var intPositif_1 = require("./intPositif");
var NaturelInductif = /** @class */ (function (_super) {
    __extends(NaturelInductif, _super);
    function NaturelInductif() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NaturelInductif.prototype.creerZero = function () {
        return new ZeroInductif();
    };
    NaturelInductif.prototype.creerSuccesseur = function (predecesseur) {
        return this.creerNatAvecValeur(predecesseur.val() + 1);
    };
    NaturelInductif.prototype.creerNatAvecValeur = function (nb) {
        if (nb < 0) {
            throw "Erreur de valeur";
        }
        else if (nb == 0) {
            return new ZeroInductif();
        }
        else {
            return new SuccInductif(new intPositif_1.IntPositif(nb - 1));
        }
    };
    return NaturelInductif;
}(naturels_1.EtatNaturelPur));
exports.NaturelInductif = NaturelInductif;
var ZeroInductif = /** @class */ (function (_super) {
    __extends(ZeroInductif, _super);
    function ZeroInductif() {
        return _super.call(this) || this;
    }
    ZeroInductif.prototype.chiffre = function (i) {
        return 0;
    };
    ZeroInductif.prototype.taille = function () {
        return 0;
    };
    ZeroInductif.prototype.val = function () {
        return 0;
    };
    ZeroInductif.prototype.estNul = function () {
        return this.val() == 0;
    };
    ZeroInductif.prototype.predecesseur = function () {
        throw "Erreur : pas de predecesseur de Zero ";
    };
    return ZeroInductif;
}(NaturelInductif));
exports.ZeroInductif = ZeroInductif;
var SuccInductif = /** @class */ (function (_super) {
    __extends(SuccInductif, _super);
    function SuccInductif(predec) {
        var _this = _super.call(this) || this;
        _this.predec = predec;
        return _this;
    }
    SuccInductif.prototype.chiffre = function (i) {
        return parseInt(String(this.val()).charAt(this.taille() - 1 - i));
    };
    SuccInductif.prototype.taille = function () {
        return String(this.val()).length;
    };
    SuccInductif.prototype.val = function () {
        return this.predec.val() + 1;
    };
    SuccInductif.prototype.estNul = function () {
        return this.val() == 0;
    };
    SuccInductif.prototype.predecesseur = function () {
        return _super.prototype.creerNatAvecValeur.call(this, this.val() - 1);
    };
    return SuccInductif;
}(NaturelInductif));
exports.SuccInductif = SuccInductif;
//# sourceMappingURL=natInductif.js.map