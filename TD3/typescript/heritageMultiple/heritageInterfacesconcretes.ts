export function heriterInterfacesConcretes(descendant: any, ascendants: any[]) {
    ascendants.forEach(ascendant => {
        Object.getOwnPropertyNames(ascendant.prototype).forEach(nom => {
            descendant.prototype[nom] = ascendant.prototype[nom];
        });
    });
}

