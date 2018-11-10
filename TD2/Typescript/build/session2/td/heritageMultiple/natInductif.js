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
/////////////////////////////////////////////////////
var NombreDecimal = /** @class */ (function () {
    function NombreDecimal(nb) {
        this.nb = nb;
    }
    NombreDecimal.prototype.chiffre = function (i) {
        return parseInt(this.nb.charAt(this.taille() - 1 - i));
        ;
    };
    NombreDecimal.prototype.taille = function () {
        return this.nb.length;
    };
    NombreDecimal.prototype.val = function () {
        return parseInt(this.nb);
    };
    NombreDecimal.prototype.estNul = function () {
        return false;
    };
    NombreDecimal.prototype.predecesseur = function () {
        return this.creerNatAvecValeur(this.val() - 1);
    };
    NombreDecimal.prototype.creerSuccesseur = function (predecesseur) {
        return new Succ(predecesseur);
    };
    NombreDecimal.prototype.creerNatAvecValeur = function (valeur) {
        if (valeur === 0) {
            return this.creerZero();
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(valeur - 1));
    };
    NombreDecimal.prototype.creerZero = function () {
        return new Zero();
    };
    NombreDecimal.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    NombreDecimal.prototype.somme = function (x) {
        return this.creerNatAvecValeur(x.val() + this.val());
    };
    NombreDecimal.prototype.zero = function () {
        return this.creerZero();
    };
    NombreDecimal.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    NombreDecimal.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    NombreDecimal.prototype.div = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    NombreDecimal.prototype.produit = function (x) {
        return this.creerNatAvecValeur(x.val() * this.val());
    };
    NombreDecimal.prototype.representation = function () {
        return this.val().toString();
    };
    NombreDecimal.prototype.estEgal = function (n) {
        return n.val() == this.val();
    };
    return NombreDecimal;
}());
exports.NombreDecimal = NombreDecimal;
/////////////////////////////////////////////////////
////////////////////////////////////////////////////
var Zero = /** @class */ (function () {
    function Zero() {
    }
    Zero.prototype.val = function () {
        return 0;
    };
    Zero.prototype.estNul = function () {
        return true;
    };
    Zero.prototype.predecesseur = function () {
        throw new Error("* Erreur : naturel nul sans prédécesseur.");
    };
    Zero.prototype.taille = function () {
        return 1;
    };
    Zero.prototype.chiffre = function (i) {
        return 0;
    };
    Zero.prototype.creerZero = function () {
        return this;
    };
    Zero.prototype.creerSuccesseur = function (predecesseur) {
        return new Succ(predecesseur);
    };
    Zero.prototype.creerNatAvecValeur = function (valeur) {
        if (valeur === 0) {
            return this.creerZero();
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(valeur - 1));
    };
    Zero.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    Zero.prototype.somme = function (x) {
        return this.creerNatAvecValeur(x.val() + this.val());
    };
    Zero.prototype.zero = function () {
        return this.creerZero();
    };
    Zero.prototype.produit = function (x) {
        return this.creerNatAvecValeur(x.val() * this.val());
    };
    Zero.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    Zero.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    Zero.prototype.div = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    Zero.prototype.representation = function () {
        return this.val().toString();
    };
    Zero.prototype.estEgal = function (n) {
        return n.val() == this.val();
    };
    return Zero;
}());
exports.Zero = Zero;
var Succ = /** @class */ (function () {
    function Succ(pred) {
        this.pred = pred;
    }
    Succ.prototype.val = function () {
        return this.pred.val() + 1;
    };
    Succ.prototype.estNul = function () {
        return false;
    };
    Succ.prototype.predecesseur = function () {
        return this.pred;
    };
    Succ.prototype.taille = function () {
        return this.representation().length;
    };
    Succ.prototype.chiffre = function (i) {
        return parseInt(this.representation().charAt(this.taille() - 1 - i));
    };
    Succ.prototype.creerZero = function () {
        return new Zero();
    };
    Succ.prototype.creerSuccesseur = function (predecesseur) {
        return new Succ(predecesseur);
    };
    Succ.prototype.creerNatAvecValeur = function (valeur) {
        if (valeur === 0) {
            return this.creerZero();
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(valeur - 1));
    };
    Succ.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    Succ.prototype.somme = function (x) {
        return this.creerNatAvecValeur(x.val() + this.val());
    };
    Succ.prototype.zero = function () {
        return this.creerZero();
    };
    Succ.prototype.produit = function (x) {
        return this.creerNatAvecValeur(x.val() * this.val());
    };
    Succ.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    Succ.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    Succ.prototype.div = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    Succ.prototype.representation = function () {
        return this.val().toString();
    };
    Succ.prototype.estEgal = function (n) {
        return n.val() == this.val();
    };
    return Succ;
}());
exports.Succ = Succ;
exports.zeroSuccZ = new Zero();
exports.zeroSuccS = new Succ(new Zero());
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
    return ZeroRec;
}(Zero));
exports.ZeroRec = ZeroRec;
var SuccRec = /** @class */ (function (_super) {
    __extends(SuccRec, _super);
    function SuccRec() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    return SuccRec;
}(Succ));
exports.SuccRec = SuccRec;
exports.zeroSuccRecZ = new ZeroRec();
exports.zeroSuccRecS = new SuccRec(new ZeroRec());
//# sourceMappingURL=natInductif.js.map