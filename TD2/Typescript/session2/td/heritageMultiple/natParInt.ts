import {
    Nat, FabriqueNat
} from "./naturels";

export class NatParInt implements Nat {

    constructor(private valeur: number) {
    }

    creerNatAvecValeur(valeur: number): Nat {
        if (valeur < 0) {
            throw new Error('* Erreur : valeur négative.');
        }
        if (valeur % 1 !== 0) {
            throw new Error('* Erreur : valeur non entière.');
        }
        return new NatParInt(valeur);
    }

    creerZero(): Nat {
        return this.creerNatAvecValeur(0);
    }

    creerSuccesseur(predecesseur: Nat): Nat {
        return this.creerNatAvecValeur(predecesseur.val() + 1);
    }

    creerNatAvecRepresentation(repDecimale: string): Nat {
        return this.creerNatAvecValeur(parseInt(repDecimale));
    }


    val(): number {
        return this.valeur;
    }

    estNul(): boolean {
        return this.val() === 0;
    }

    predecesseur(): Nat {
        if (this.estNul()) {
            throw new Error("* Erreur : naturel nul sans prédécesseur.");
        }
        return this.creerNatAvecValeur(this.val() - 1);
    }

    taille(): number {
        return this.representation().length;
    }

    chiffre(i: number): number {
        return parseInt(this.representation().charAt(this.taille() - 1 - i));
    }


    somme(x: Nat): Nat {
        return this.creerNatAvecValeur(x.val() + this.val());
    }

    zero(): Nat {
        return this.creerZero();
    }

    produit(x: Nat): Nat {
        return this.creerNatAvecValeur(x.val() * this.val());
    }

    un(): Nat {
        return this.creerNatAvecValeur(1);
    }

    modulo(x: Nat): Nat {
        return this.creerNatAvecValeur(this.val() % x.val());
    }

    div(x: Nat): Nat {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    }

    representation(): string {
        return this.val().toString();
    }

    estEgal(n: Nat): boolean {
        return n.val() == this.val();
    }


}

export const natParInt: FabriqueNat<Nat> = new NatParInt(0);

