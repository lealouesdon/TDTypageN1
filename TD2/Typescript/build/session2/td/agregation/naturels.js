"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var intPositif_1 = require("./intPositif");
var natInductif_1 = require("./natInductif");
var EtatNaturelPur = /** @class */ (function () {
    function EtatNaturelPur() {
    }
    EtatNaturelPur.prototype.creerZero = function () {
        return this.creerNatAvecValeur(0);
    };
    EtatNaturelPur.prototype.creerSucesseur = function (predecesseur) {
        return this.creerNatAvecValeur(predecesseur.val() + 1);
    };
    EtatNaturelPur.prototype.creerNatAvecValeur = function (nb) {
        if (nb < 0) {
            throw "Erreur de valeur";
        }
        else if (nb == 0) {
            return new natInductif_1.ZeroInductif();
        }
        else {
            return new intPositif_1.IntPositif(nb);
        }
    };
    EtatNaturelPur.prototype.creerNatAvecRepresentation = function (val) {
        return this.creerNatAvecValeur(parseInt(val));
    };
    EtatNaturelPur.prototype.creerSuccesseur = function (predecesseur) {
        return this.creerNatAvecValeur(predecesseur.val() + 1);
    };
    return EtatNaturelPur;
}());
exports.EtatNaturelPur = EtatNaturelPur;
//# sourceMappingURL=naturels.js.map