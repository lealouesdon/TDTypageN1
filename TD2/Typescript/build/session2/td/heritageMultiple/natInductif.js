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
var natParInt_1 = require("./natParInt");
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
        return new SuccParInt(predecesseur);
    };
    NombreDecimal.prototype.creerNatAvecValeur = function (valeur) {
        if (valeur === 0) {
            return this.creerZero();
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(valeur - 1));
    };
    NombreDecimal.prototype.creerZero = function () {
        return new ZeroParInt();
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
var IntPositif = /** @class */ (function () {
    function IntPositif(nb) {
        this.nb = nb;
    }
    IntPositif.prototype.chiffre = function (i) {
        return parseInt(this.representation().charAt(this.taille() - 1 - i));
        ;
    };
    IntPositif.prototype.taille = function () {
        return this.representation().length;
    };
    IntPositif.prototype.val = function () {
        return this.nb;
    };
    IntPositif.prototype.estNul = function () {
        return false;
    };
    IntPositif.prototype.predecesseur = function () {
        return this.creerNatAvecValeur(this.val() - 1);
    };
    IntPositif.prototype.creerSuccesseur = function (predecesseur) {
        return new SuccParInt(predecesseur);
    };
    IntPositif.prototype.creerNatAvecValeur = function (valeur) {
        if (valeur === 0) {
            return this.creerZero();
        }
        return this.creerSuccesseur(this.creerNatAvecValeur(valeur - 1));
    };
    IntPositif.prototype.creerZero = function () {
        return new ZeroParInt();
    };
    IntPositif.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    IntPositif.prototype.somme = function (x) {
        return this.creerNatAvecValeur(x.val() + this.val());
    };
    IntPositif.prototype.zero = function () {
        return this.creerZero();
    };
    IntPositif.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    IntPositif.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    IntPositif.prototype.div = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    IntPositif.prototype.produit = function (x) {
        return this.creerNatAvecValeur(x.val() * this.val());
    };
    IntPositif.prototype.representation = function () {
        return this.val().toString();
    };
    IntPositif.prototype.estEgal = function (n) {
        return n.val() == this.val();
    };
    return IntPositif;
}());
exports.IntPositif = IntPositif;
///////////////////////////////////////
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
        return new SuccParInt(predecesseur);
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
        return new ZeroParInt();
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
///////////////////////////////////////
var EtatZero = /** @class */ (function () {
    function EtatZero() {
    }
    EtatZero.prototype.chiffre = function (i) {
        return 0;
    };
    EtatZero.prototype.taille = function () {
        return 0;
    };
    EtatZero.prototype.val = function () {
        return 0;
    };
    EtatZero.prototype.estNul = function () {
        return false;
    };
    EtatZero.prototype.predecesseur = function () {
        throw new Error("* Erreur : naturel nul sans prédécesseur.");
    };
    EtatZero.prototype.creerSuccesseur = function (predecesseur) {
        return new SuccParInt(predecesseur);
    };
    EtatZero.prototype.creerNatAvecValeur = function (valeur) {
        if (valeur < 0) {
            throw new Error('* Erreur : valeur négative.');
        }
        if (valeur % 1 !== 0) {
            throw new Error('* Erreur : valeur non entière.');
        }
        return new natParInt_1.NatParInt(valeur);
    };
    EtatZero.prototype.creerZero = function () {
        return this;
    };
    EtatZero.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    EtatZero.prototype.somme = function (x) {
        return this.creerNatAvecValeur(x.val() + this.val());
    };
    EtatZero.prototype.zero = function () {
        return this.creerZero();
    };
    EtatZero.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    EtatZero.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    EtatZero.prototype.div = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    EtatZero.prototype.produit = function (x) {
        return this.creerNatAvecValeur(x.val() * this.val());
    };
    EtatZero.prototype.representation = function () {
        return this.val().toString();
    };
    EtatZero.prototype.estEgal = function (n) {
        return n.val() == this.val();
    };
    return EtatZero;
}());
exports.EtatZero = EtatZero;
////////////////////////////////////////////////////
var ZeroParInt = /** @class */ (function (_super) {
    __extends(ZeroParInt, _super);
    function ZeroParInt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZeroParInt.prototype.val = function () {
        return 0;
    };
    ZeroParInt.prototype.estNul = function () {
        return true;
    };
    ZeroParInt.prototype.predecesseur = function () {
        throw new Error("* Erreur : naturel nul sans prédécesseur.");
    };
    ZeroParInt.prototype.taille = function () {
        return 1;
    };
    ZeroParInt.prototype.chiffre = function (i) {
        return 0;
    };
    ZeroParInt.prototype.creerZero = function () {
        return this;
    };
    ZeroParInt.prototype.creerSuccesseur = function (predecesseur) {
        return new SuccParInt(predecesseur);
    };
    ZeroParInt.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    ZeroParInt.prototype.somme = function (x) {
        return this.creerNatAvecValeur(x.val() + this.val());
    };
    ZeroParInt.prototype.zero = function () {
        return this.creerZero();
    };
    ZeroParInt.prototype.produit = function (x) {
        return this.creerNatAvecValeur(x.val() * this.val());
    };
    ZeroParInt.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    ZeroParInt.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    ZeroParInt.prototype.div = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    ZeroParInt.prototype.representation = function () {
        return this.val().toString();
    };
    ZeroParInt.prototype.estEgal = function (n) {
        return n.val() == this.val();
    };
    return ZeroParInt;
}(EtatZero));
exports.ZeroParInt = ZeroParInt;
var SuccParInt = /** @class */ (function (_super) {
    __extends(SuccParInt, _super);
    function SuccParInt(pred) {
        return _super.call(this, pred) || this;
    }
    SuccParInt.prototype.estNul = function () {
        return false;
    };
    SuccParInt.prototype.taille = function () {
        return this.representation().length;
    };
    SuccParInt.prototype.chiffre = function (i) {
        return parseInt(this.representation().charAt(this.taille() - 1 - i));
    };
    SuccParInt.prototype.creerZero = function () {
        return new ZeroParInt();
    };
    SuccParInt.prototype.creerSuccesseur = function (predecesseur) {
        return new SuccParInt(predecesseur);
    };
    SuccParInt.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    };
    SuccParInt.prototype.somme = function (x) {
        return this.creerNatAvecValeur(x.val() + this.val());
    };
    SuccParInt.prototype.zero = function () {
        return this.creerZero();
    };
    SuccParInt.prototype.produit = function (x) {
        return this.creerNatAvecValeur(x.val() * this.val());
    };
    SuccParInt.prototype.un = function () {
        return this.creerNatAvecValeur(1);
    };
    SuccParInt.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    SuccParInt.prototype.div = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    SuccParInt.prototype.representation = function () {
        return this.val().toString();
    };
    SuccParInt.prototype.estEgal = function (n) {
        return n.val() == this.val();
    };
    return SuccParInt;
}(EtatSucc));
exports.SuccParInt = SuccParInt;
exports.zeroSuccZ = new ZeroParInt();
exports.zeroSuccS = new SuccParInt(new ZeroParInt());
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
}(EtatZero));
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
}(EtatSucc));
exports.SuccRec = SuccRec;
exports.zeroSuccRecZ = new ZeroRec();
exports.zeroSuccRecS = new SuccRec(new ZeroRec());
var SuccDecimal = /** @class */ (function (_super) {
    __extends(SuccDecimal, _super);
    function SuccDecimal(pred) {
        return _super.call(this, pred) || this;
    }
    SuccDecimal.prototype.creerZero = function () {
        return new ZeroDecimal();
    };
    return SuccDecimal;
}(EtatSucc));
exports.SuccDecimal = SuccDecimal;
var ZeroDecimal = /** @class */ (function (_super) {
    __extends(ZeroDecimal, _super);
    function ZeroDecimal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZeroDecimal.prototype.creerZero = function () {
        return this;
    };
    return ZeroDecimal;
}(EtatZero));
exports.ZeroDecimal = ZeroDecimal;
//# sourceMappingURL=natInductif.js.map