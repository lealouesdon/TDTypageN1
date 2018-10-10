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
exports.__esModule = true;
var Succ_1 = require("./Succ");
var SuccRec = /** @class */ (function (_super) {
    __extends(SuccRec, _super);
    function SuccRec(predecesseur) {
        return _super.call(this, predecesseur) || this;
    }
    SuccRec.prototype.somme = function (n) {
        return this.creerSuccesseur(this.predecesseur().somme(n));
    };
    SuccRec.prototype.produit = function (n) {
        return n.somme(this.predecesseur().produit(n));
    };
    SuccRec.prototype.equals = function (o) {
        if (o.estNul()) {
            return false;
        }
        else {
            return this.predecesseur().equals(o.predecesseur);
        }
    };
    SuccRec.prototype.div = function (n) {
        if (n.val() == 0) {
            throw new Error("Division par zéro");
        }
        else if (this.val() - n.val() == 0) {
            return this.creerNatAvecValeur(1);
        }
        else if (this.val() < n.val()) {
            return this.creerNatAvecValeur(0);
        }
        else {
            return this.creerNatAvecValeur(1 + this.creerNatAvecValeur(this.val() - n.val()).div(n).val());
        }
    };
    SuccRec.prototype.modulo = function (n) {
        if (n.val() == 0) {
            throw new Error("Divison par zéro");
        }
        else {
            return this.creerNatAvecValeur(this.val() - n.val()).modulo(n);
        }
    };
    return SuccRec;
}(Succ_1.Succ));
exports.SuccRec = SuccRec;
