export type FormatNatParInt = {
    val: number
}

export class NatParInt {
    constructor(private val: number) {
        if (val < 0)
            throw new Error("nombre négatif");
        if (val !== Math.floor(val))
            throw new Error("nombre non entier");
    }

    somme(x: NatParInt): NatParInt {
        return new NatParInt(this.getInt() + x.getInt());
    }

    getInt(): number {
        return this.val;
    }

    representation(): string {
        return this.val.toString();
    }

    representationJSON(): FormatNatParInt {
        return {
            val: this.val
        };
    }
}

export type FormatNatDecimal = {
    chiffres: string
}

export class NatDecimal {

    constructor(private chiffres: string) {
        if (!parseInt(chiffres))
            throw new Error("représentation non décimale")
    }
    somme(x: NatDecimal): NatDecimal {
        const t = this.taille() < x.taille() ? x.taille() : this.taille();
        const rep: string[] = [];
        let retenue = 0;
        for (let i = 0; i < t; i++) {
            let chiffre = this.chiffre(i) + x.chiffre(i) + retenue;
            if (chiffre > 9) {
                chiffre = chiffre - 10;
                retenue = 1;
            } else {
                retenue = 0;
            }
            rep.push(chiffre.toString());
        }
        if (retenue !== 0) {
            rep.push("1");
        }
        return new NatDecimal(rep.reverse().join(""));
    }

    chiffre(i: number): number {
        if (i < this.taille())
            return parseInt(this.chiffres.charAt(this.taille() - 1 - i));
        return 0;
    }
    taille(): number {
        return this.chiffres.length;
    }
    representation(): string {
        return this.chiffres;
    }
    representationJSON(): FormatNatDecimal {
        return {
            chiffres: this.chiffres
        };
    }
}