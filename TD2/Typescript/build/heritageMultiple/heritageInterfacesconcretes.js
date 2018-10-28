"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function heriterInterfacesConcretes(descendant, ascendants) {
    ascendants.forEach(function (ascendant) {
        Object.getOwnPropertyNames(ascendant.prototype).forEach(function (nom) {
            descendant.prototype[nom] = ascendant.prototype[nom];
        });
    });
}
exports.heriterInterfacesConcretes = heriterInterfacesConcretes;
//# sourceMappingURL=heritageInterfacesconcretes.js.map