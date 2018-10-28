"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssembleurString = /** @class */ (function () {
    function AssembleurString(s) {
        this.tableau = s.split("");
    }
    AssembleurString.prototype.caractere = function (i) {
        return this.tableau[i];
    };
    AssembleurString.prototype.taille = function () {
        return this.tableau.length;
    };
    AssembleurString.prototype.ajouterCaractereFin = function (x) {
        this.tableau.push(x);
    };
    AssembleurString.prototype.ajouterCaractereDebut = function (x) {
        this.tableau.unshift(x);
    };
    AssembleurString.prototype.retirerCaractereDebut = function () {
        return this.tableau.shift();
    };
    AssembleurString.prototype.retirerCaractereFin = function () {
        return this.tableau.pop();
    };
    AssembleurString.prototype.chaine = function () {
        return this.tableau.join("");
    };
    return AssembleurString;
}());
exports.AssembleurString = AssembleurString;
function assembleurString(s) {
    return new AssembleurString(s);
}
exports.assembleurString = assembleurString;
//# sourceMappingURL=assembleurChaine.js.map