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
var EtatZero = /** @class */ (function () {
    function EtatZero() {
    }
    ;
    return EtatZero;
}());
//////////////////////////////////////////////////////////////////////////
var EtatSucc = /** @class */ (function () {
    function EtatSucc() {
    }
    ;
    return EtatSucc;
}());
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ZeroCalculantSurInt = /** @class */ (function (_super) {
    __extends(ZeroCalculantSurInt, _super);
    function ZeroCalculantSurInt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZeroCalculantSurInt.prototype.val = function () {
        return 0;
    };
    ZeroCalculantSurInt.prototype.estNul = function () {
        return true;
    };
    ZeroCalculantSurInt.prototype.predecesseur = function () {
        throw new Error("* Erreur : naturel nul sans prédécesseur.");
    };
    ZeroCalculantSurInt.prototype.taille = function () {
        return 1;
    };
    ZeroCalculantSurInt.prototype.chiffre = function (i) {
        return 0;
    };
    ZeroCalculantSurInt.prototype.creerZero = function () {
        return this;
    };
    ZeroCalculantSurInt.prototype.creerSuccesseur = function (predecesseur) {
        return new SuccCalculantSurInt(predecesseur);
    };
    ZeroCalculantSurInt.prototype.creerNatAvecValeur = function (valeur) {
        if (valeur === 0) {
            return this.creerZero();
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(valeur - 1));
    };
    ZeroCalculantSurInt.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    ZeroCalculantSurInt.prototype.somme = function (x) {
        return this.creerNatAvecValeur(x.val() + this.val());
    };
    ZeroCalculantSurInt.prototype.zero = function () {
        return this.creerZero();
    };
    ZeroCalculantSurInt.prototype.produit = function (x) {
        return this.creerNatAvecValeur(x.val() * this.val());
    };
    ZeroCalculantSurInt.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    ZeroCalculantSurInt.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    ZeroCalculantSurInt.prototype.div = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    ZeroCalculantSurInt.prototype.representation = function () {
        return this.val().toString();
    };
    ZeroCalculantSurInt.prototype.estEgal = function (n) {
        return n.val() == this.val();
    };
    return ZeroCalculantSurInt;
}(EtatZero));
exports.ZeroCalculantSurInt = ZeroCalculantSurInt;
//////////////////////////////////////////////////////////////////
var SuccCalculantSurInt = /** @class */ (function (_super) {
    __extends(SuccCalculantSurInt, _super);
    function SuccCalculantSurInt(pred) {
        var _this = _super.call(this) || this;
        _this.pred = pred;
        return _this;
    }
    SuccCalculantSurInt.prototype.val = function () {
        return this.pred.val() + 1;
    };
    SuccCalculantSurInt.prototype.estNul = function () {
        return false;
    };
    SuccCalculantSurInt.prototype.predecesseur = function () {
        return this.pred;
    };
    SuccCalculantSurInt.prototype.taille = function () {
        return this.representation().length;
    };
    SuccCalculantSurInt.prototype.chiffre = function (i) {
        return parseInt(this.representation().charAt(this.taille() - 1 - i));
    };
    SuccCalculantSurInt.prototype.creerZero = function () {
        return new ZeroCalculantSurInt();
    };
    SuccCalculantSurInt.prototype.creerSuccesseur = function (predecesseur) {
        return new SuccCalculantSurInt(predecesseur);
    };
    SuccCalculantSurInt.prototype.creerNatAvecValeur = function (valeur) {
        if (valeur === 0) {
            return this.creerZero();
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(valeur - 1));
    };
    SuccCalculantSurInt.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    SuccCalculantSurInt.prototype.somme = function (x) {
        return this.creerNatAvecValeur(x.val() + this.val());
    };
    SuccCalculantSurInt.prototype.zero = function () {
        return this.creerZero();
    };
    SuccCalculantSurInt.prototype.produit = function (x) {
        return this.creerNatAvecValeur(x.val() * this.val());
    };
    SuccCalculantSurInt.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    SuccCalculantSurInt.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    SuccCalculantSurInt.prototype.div = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    SuccCalculantSurInt.prototype.representation = function () {
        return this.val().toString();
    };
    SuccCalculantSurInt.prototype.estEgal = function (n) {
        return n.val() == this.val();
    };
    return SuccCalculantSurInt;
}(EtatSucc));
exports.SuccCalculantSurInt = SuccCalculantSurInt;
///////////////////////////////////////////////////////////////////////////////////////////////////
exports.zeroSuccZ = new ZeroCalculantSurInt();
exports.zeroSuccS = new SuccCalculantSurInt(new ZeroCalculantSurInt());
var ZeroRec = /** @class */ (function (_super) {
    __extends(ZeroRec, _super);
    function ZeroRec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZeroRec.prototype.creerZero = function () {
        return new ZeroRec();
    };
    ZeroRec.prototype.creerSuccesseur = function (predecesseur) {
        return new SuccRec(predecesseur);
    };
    ZeroRec.prototype.somme = function (x) {
        return x;
    };
    ZeroRec.prototype.zero = function () {
        return this.creerZero();
    };
    ZeroRec.prototype.produit = function (x) {
        return this.zero();
    };
    ZeroRec.prototype.un = function () {
        return this.creerSuccesseur(this.zero());
    };
    ZeroRec.prototype.modulo = function (x) {
        return this.creerZero();
    };
    ZeroRec.prototype.div = function (x) {
        return this.creerZero();
    };
    ZeroRec.prototype.representation = function () {
        return "0";
    };
    ZeroRec.prototype.estEgal = function (n) {
        return n.estNul();
    };
    ZeroRec.prototype.estNul = function () {
        return true;
    };
    ZeroRec.prototype.predecesseur = function () {
        throw new Error("* Erreur : naturel nul sans prédécesseur.");
    };
    ZeroRec.prototype.chiffre = function (i) {
        return 0;
    };
    ZeroRec.prototype.taille = function () {
        return 1;
    };
    ZeroRec.prototype.val = function () {
        return 0;
    };
    ZeroRec.prototype.creerNatAvecValeur = function (valeur) {
        if (valeur === 0) {
            return this.creerZero();
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(valeur - 1));
    };
    ZeroRec.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    return ZeroRec;
}(EtatZero));
exports.ZeroRec = ZeroRec;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var SuccRec = /** @class */ (function (_super) {
    __extends(SuccRec, _super);
    function SuccRec(pred) {
        var _this = _super.call(this) || this;
        _this.pred = pred;
        return _this;
    }
    SuccRec.prototype.creerZero = function () {
        return new ZeroRec();
    };
    SuccRec.prototype.creerSuccesseur = function (predecesseur) {
        return new SuccRec(predecesseur);
    };
    SuccRec.prototype.somme = function (x) {
        if (x.estNul()) {
            return this;
        }
        return this.creerSuccesseur(this.somme(x.predecesseur()));
    };
    SuccRec.prototype.produit = function (x) {
        if (x.estNul()) {
            return this.zero();
        }
        return this.somme(this.produit(x.predecesseur()));
    };
    SuccRec.prototype.modulo = function (x) {
        var r = this.predecesseur().modulo(x);
        return this.creerSuccesseur(r).estEgal(x) ?
            this.creerZero() :
            this.creerSuccesseur(r);
    };
    SuccRec.prototype.div = function (x) {
        var r = this.predecesseur().modulo(x);
        var q = this.predecesseur().div(x);
        return this.creerSuccesseur(r).estEgal(x) ?
            this.creerSuccesseur(q) :
            q;
    };
    SuccRec.prototype.estEgal = function (n) {
        if (n.estNul())
            return false;
        return this.predecesseur().estEgal(n.predecesseur());
    };
    SuccRec.prototype.val = function () {
        return this.pred.val() + 1;
    };
    SuccRec.prototype.estNul = function () {
        return false;
    };
    SuccRec.prototype.chiffre = function (i) {
        return parseInt(this.representation().charAt(this.taille() - 1 - i));
    };
    SuccRec.prototype.creerNatAvecValeur = function (valeur) {
        if (valeur === 0) {
            return this.creerZero();
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(valeur - 1));
    };
    SuccRec.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    SuccRec.prototype.representation = function () {
        return this.val().toString();
    };
    SuccRec.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    SuccRec.prototype.zero = function () {
        return this.creerZero();
    };
    SuccRec.prototype.predecesseur = function () {
        return this.pred;
    };
    SuccRec.prototype.taille = function () {
        return this.representation().length;
    };
    return SuccRec;
}(EtatSucc));
exports.SuccRec = SuccRec;
exports.zeroSuccRecZ = new ZeroRec();
exports.zeroSuccRecS = new SuccRec(new ZeroRec());
//# sourceMappingURL=natInductif.js.map