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
var NombreDecimal = /** @class */ (function (_super) {
    __extends(NombreDecimal, _super);
    function NombreDecimal(chiffres) {
        var _this = _super.call(this) || this;
        _this.chiffres = chiffres;
        return _this;
    }
    NombreDecimal.prototype.chiffre = function (i) {
        return parseInt(this.chiffres.charAt(this.taille() - 1 - i));
    };
    NombreDecimal.prototype.taille = function () {
        return this.chiffres.length;
    };
    NombreDecimal.prototype.val = function () {
        return parseInt(this.chiffres);
    };
    NombreDecimal.prototype.estNul = function () {
        return this.val() == 0;
    };
    NombreDecimal.prototype.predecesseur = function () {
        return _super.prototype.creerNatAvecValeur.call(this, this.val() - 1);
    };
    NombreDecimal.prototype.creerNatAvecRepresentation = function (val) {
        return new NombreDecimal(val);
    };
    return NombreDecimal;
}(naturels_1.EtatNaturelPur));
exports.NombreDecimal = NombreDecimal;
//# sourceMappingURL=nombreDecimal.js.map