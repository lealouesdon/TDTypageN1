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
var IntPositif = /** @class */ (function (_super) {
    __extends(IntPositif, _super);
    function IntPositif(nb) {
        var _this = _super.call(this) || this;
        _this.nb = nb;
        return _this;
    }
    IntPositif.prototype.chiffre = function (i) {
        return parseInt(String(this.nb).charAt(this.taille() - 1 - i));
    };
    IntPositif.prototype.taille = function () {
        return String(this.nb).length;
    };
    IntPositif.prototype.val = function () {
        return this.nb;
    };
    IntPositif.prototype.estNul = function () {
        return this.val() == 0;
    };
    IntPositif.prototype.predecesseur = function () {
        return _super.prototype.creerNatAvecValeur.call(this, this.val() - 1);
    };
    IntPositif.prototype.creerNatAvecValeur = function (nb) {
        return new IntPositif(nb);
    };
    return IntPositif;
}(naturels_1.EtatNaturelPur));
exports.IntPositif = IntPositif;
//# sourceMappingURL=intPositif.js.map