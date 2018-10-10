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
var Zero_1 = require("./Zero");
var ZeroRec = /** @class */ (function (_super) {
    __extends(ZeroRec, _super);
    function ZeroRec() {
        return _super.call(this) || this;
    }
    ZeroRec.prototype.somme = function (n) {
        return n;
    };
    ZeroRec.prototype.produit = function (n) {
        return this.creerZero();
    };
    ZeroRec.prototype.equals = function (o) {
        return o.val() == 0;
    };
    ZeroRec.prototype.div = function (n) {
        if (n.val() != 0) {
            return this.creerZero();
        }
        else {
            throw new Error("Division par zero");
        }
    };
    ZeroRec.prototype.modulo = function (n) {
        if (n.val() != 0) {
            return this.creerZero();
        }
        else {
            throw new Error("Division par zero");
        }
    };
    return ZeroRec;
}(Zero_1.Zero));
exports.ZeroRec = ZeroRec;
