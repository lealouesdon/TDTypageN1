import {
    Nat, FabriqueNat
} from "./naturels";
import { assembleurString } from "../../bibliotheque/assembleurChaine";

function nettoyage(s: string): string {
    const a = assembleurString(s);
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === "0") {
            a.retirerCaractereDebut();
        } else {
            break;
        }
    }
    return a.chaine();
}

export class NatDecimal implements Nat {

    /*
    * Aucun contrôle n'est réalisé. L'argument est supposé correct :
    * - représentation décimale (suite de 0 et 1, pas de 0 en tête inutile).
    * Pour un contrôle, utiliser la fabrique.
    */
    constructor(private chiffres: string) { }

    creerNatAvecRepresentation(repDecimale: string): Nat {
        if (repDecimale.search(/^d/) !== -1) {
            throw new Error("* Erreur : représentation non décimale.");
        }
        repDecimale = nettoyage(repDecimale);
        if (repDecimale === "") {
            repDecimale = "0";
        }
        return new NatDecimal(repDecimale);


    }

    creerNatAvecValeur(valeur: number): Nat {
        return new NatDecimal(valeur.toString());
    }

    creerZero(): Nat {
        return new NatDecimal("0");
    }

    creerSuccesseur(predecesseur: Nat): Nat {
        let t = predecesseur.taille();
        const a = assembleurString("");
        let retenue = 1;
        for (let i = 0; i < t; i++) {
            let chiffre = predecesseur.chiffre(i) + retenue;
            if (chiffre > 9) {
                chiffre = chiffre - 10;
                retenue = 1;
            } else {
                retenue = 0;
            }
            a.ajouterCaractereDebut(chiffre.toString());
        }
        if (retenue === 1) {
            a.ajouterCaractereDebut("1");
        }
        return new NatDecimal(a.chaine());
    }

    val(): number {
        return parseInt(this.chiffres);
    }

    estNul(): boolean {
        return this.val() == 0;
    }

    predecesseur(): Nat {
        if (this.estNul()) {
            throw new Error("* Erreur : naturel nul sans prédécesseur.");
        }
        const t = this.taille();
        const rep: string[] = [];
        let retenue = -1;
        for (let i = 0; i < t; i++) {
            let chiffre = this.chiffre(i) + retenue;
            if (chiffre === -1) {
                chiffre = 9;
                retenue = -1;
            } else {
                retenue = 0;
            }
            rep.push(chiffre.toString());
        }
        return this.creerNatAvecRepresentation(rep.reverse().join(""));
    }

    taille(): number {
        return this.chiffres.length;
    }

    chiffre(i: number): number {
        if (i < this.taille()) {
            return parseInt(this.chiffres.charAt(this.taille() - 1 - i));
        }
        return 0;
    }

    somme(x: Nat): Nat {
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
        if (retenue === 1) {
            rep.push("1");
        }
        return this.creerNatAvecRepresentation(rep.reverse().join(""));
    }

    zero(): Nat {
        return this.creerZero();
    }

    produit(x: Nat): Nat {
        if (x.estEgal(DIX)) {
            return this.creerNatAvecRepresentation(this.representation() + "0");
        }
        let res = this.zero();
        let index = this.zero();
        while (!index.estEgal(x)) {
            res = res.somme(this);
            index = this.creerSuccesseur(index);
        }
        return res;
    }

    un(): Nat {
        return this.creerNatAvecRepresentation("1");
    }

    modulo(x: Nat): Nat {
        if (x.estEgal(DIX)) {
            return this.creerNatAvecValeur(this.chiffre(0));
        }
        let courant = this.zero();
        let r = this.zero();
        while (!courant.estEgal(this)) {
            r = this.creerSuccesseur(r);
            if (r.estEgal(x)) {
                r = this.zero();
            }
            courant = this.creerSuccesseur(courant);
        }
        return r;
    }

    div(x: Nat): Nat {
        if (x.estEgal(DIX)) {
            if (this.taille() == 1)
                return this.zero();
            return this.creerNatAvecRepresentation(
                this.representation().substring(0, this.taille() - 1));
        }
        let courant = this.zero();
        let q = this.zero();
        let r = this.zero();
        while (!courant.estEgal(this)) {
            r = this.creerSuccesseur(r);
            if (r.estEgal(x)) {
                r = this.zero();
                q = this.creerSuccesseur(q);
            }
            courant = this.creerSuccesseur(courant);
        }
        return q;
    }

    representation(): string {
        return this.chiffres;
    }

    estEgal(n: Nat): boolean {
        return this.representation() === n.representation();
    }


}

export const natDecimal: FabriqueNat<Nat> = new NatDecimal("0");

const DIX: Nat = natDecimal.creerNatAvecRepresentation("10");
