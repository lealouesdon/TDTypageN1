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
var assembleurChaine_1 = require("../../../bibliotheque/assembleurChaine");
var nombreDecimal_1 = require("./nombreDecimal");
function nettoyage(s) {
    var a = assembleurChaine_1.assembleurString(s);
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) === "0") {
            a.retirerCaractereDebut();
        }
        else {
            break;
        }
    }
    return a.chaine();
}
var NatDecimal = /** @class */ (function (_super) {
    __extends(NatDecimal, _super);
    /*
    * Aucun contrôle n'est réalisé. L'argument est supposé correct :
    * - représentation décimale (suite de 0 et 1, pas de 0 en tête inutile).
    * Pour un contrôle, utiliser la fabrique.
    */
    function NatDecimal(chiffres) {
        return _super.call(this, chiffres) || this;
    }
    NatDecimal.prototype.creerNatAvecRepresentation = function (repDecimale) {
        if (repDecimale.search(/^d/) !== -1) {
            throw new Error("* Erreur : représentation non décimale.");
        }
        repDecimale = nettoyage(repDecimale);
        if (repDecimale === "") {
            repDecimale = "0";
        }
        return new NatDecimal(repDecimale);
    };
    NatDecimal.prototype.creerNatAvecValeur = function (valeur) {
        return new NatDecimal(valeur.toString());
    };
    NatDecimal.prototype.creerZero = function () {
        return new NatDecimal("0");
    };
    NatDecimal.prototype.creerSuccesseur = function (predecesseur) {
        var t = predecesseur.taille();
        var a = assembleurChaine_1.assembleurString("");
        var retenue = 1;
        for (var i = 0; i < t; i++) {
            var chiffre = predecesseur.chiffre(i) + retenue;
            if (chiffre > 9) {
                chiffre = chiffre - 10;
                retenue = 1;
            }
            else {
                retenue = 0;
            }
            a.ajouterCaractereDebut(chiffre.toString());
        }
        if (retenue === 1) {
            a.ajouterCaractereDebut("1");
        }
        return new NatDecimal(a.chaine());
    };
    NatDecimal.prototype.estNul = function () {
        return this.val() == 0;
    };
    NatDecimal.prototype.predecesseur = function () {
        if (this.estNul()) {
            throw new Error("* Erreur : naturel nul sans prédécesseur.");
        }
        var t = this.taille();
        var rep = [];
        var retenue = -1;
        for (var i = 0; i < t; i++) {
            var chiffre = this.chiffre(i) + retenue;
            if (chiffre === -1) {
                chiffre = 9;
                retenue = -1;
            }
            else {
                retenue = 0;
            }
            rep.push(chiffre.toString());
        }
        return this.creerNatAvecRepresentation(rep.reverse().join(""));
    };
    NatDecimal.prototype.somme = function (x) {
        var t = this.taille() < x.taille() ? x.taille() : this.taille();
        var rep = [];
        var retenue = 0;
        for (var i = 0; i < t; i++) {
            var chiffre = this.chiffre(i) + x.chiffre(i) + retenue;
            if (chiffre > 9) {
                chiffre = chiffre - 10;
                retenue = 1;
            }
            else {
                retenue = 0;
            }
            rep.push(chiffre.toString());
        }
        if (retenue === 1) {
            rep.push("1");
        }
        return this.creerNatAvecRepresentation(rep.reverse().join(""));
    };
    NatDecimal.prototype.zero = function () {
        return this.creerZero();
    };
    NatDecimal.prototype.produit = function (x) {
        if (x.estEgal(DIX)) {
            return this.creerNatAvecRepresentation(this.representation() + "0");
        }
        var res = this.zero();
        var index = this.zero();
        while (!index.estEgal(x)) {
            res = res.somme(this);
            index = this.creerSuccesseur(index);
        }
        return res;
    };
    NatDecimal.prototype.un = function () {
        return this.creerNatAvecRepresentation("1");
    };
    NatDecimal.prototype.modulo = function (x) {
        if (x.estEgal(DIX)) {
            return this.creerNatAvecValeur(this.chiffre(0));
        }
        var courant = this.zero();
        var r = this.zero();
        while (!courant.estEgal(this)) {
            r = this.creerSuccesseur(r);
            if (r.estEgal(x)) {
                r = this.zero();
            }
            courant = this.creerSuccesseur(courant);
        }
        return r;
    };
    NatDecimal.prototype.div = function (x) {
        if (x.estEgal(DIX)) {
            if (this.taille() == 1)
                return this.zero();
            return this.creerNatAvecRepresentation(this.representation().substring(0, this.taille() - 1));
        }
        var courant = this.zero();
        var q = this.zero();
        var r = this.zero();
        while (!courant.estEgal(this)) {
            r = this.creerSuccesseur(r);
            if (r.estEgal(x)) {
                r = this.zero();
                q = this.creerSuccesseur(q);
            }
            courant = this.creerSuccesseur(courant);
        }
        return q;
    };
    NatDecimal.prototype.representation = function () {
        return _super.prototype.representation.call(this);
    };
    NatDecimal.prototype.estEgal = function (n) {
        return this.representation() === n.representation();
    };
    return NatDecimal;
}(nombreDecimal_1.NombreDecimal));
exports.NatDecimal = NatDecimal;
exports.natDecimal = new NatDecimal("0");
var DIX = exports.natDecimal.creerNatAvecRepresentation("10");
var NatDecimalParInt = /** @class */ (function (_super) {
    __extends(NatDecimalParInt, _super);
    function NatDecimalParInt(chiffres) {
        return _super.call(this, chiffres) || this;
    }
    NatDecimalParInt.prototype.creerNatAvecRepresentation = function (repDecimale) {
        if (repDecimale.search(/^d/) !== -1) {
            throw new Error("* Erreur : représentation non décimale.");
        }
        repDecimale = nettoyage(repDecimale);
        if (repDecimale === "") {
            repDecimale = "0";
        }
        return new NatDecimal(repDecimale);
    };
    NatDecimalParInt.prototype.toString = function () {
        return _super.prototype.representation.call(this);
    };
    return NatDecimalParInt;
}(nombreDecimal_1.NombreDecimal));
exports.NatDecimalParInt = NatDecimalParInt;
var NatDecimalRecursif = /** @class */ (function (_super) {
    __extends(NatDecimalRecursif, _super);
    function NatDecimalRecursif(chiffres) {
        return _super.call(this, chiffres) || this;
    }
    NatDecimalRecursif.prototype.creerNatAvecRepresentation = function (repDecimale) {
        if (repDecimale.search(/^d/) !== -1) {
            throw new Error("* Erreur : représentation non décimale.");
        }
        repDecimale = nettoyage(repDecimale);
        if (repDecimale === "") {
            repDecimale = "0";
        }
        return new NatDecimal(repDecimale);
    };
    NatDecimalRecursif.prototype.toString = function () {
        return _super.prototype.representation.call(this);
    };
    return NatDecimalRecursif;
}(nombreDecimal_1.NombreDecimal));
exports.NatDecimalRecursif = NatDecimalRecursif;
//# sourceMappingURL=natDecimal.js.map