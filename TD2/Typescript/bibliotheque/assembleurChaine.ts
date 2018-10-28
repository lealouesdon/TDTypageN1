export class AssembleurString {
    private tableau: string[];
    constructor(s: string) {
        this.tableau = s.split("");
    }
    caractere(i: number): string {
        return this.tableau[i];
    }
    taille(): number {
        return this.tableau.length;
    }
    ajouterCaractereFin(x: string): void {
        this.tableau.push(x);
    }
    ajouterCaractereDebut(x: string): void {
        this.tableau.unshift(x);
    }

    retirerCaractereDebut(): string | undefined {
        return this.tableau.shift();
    }

    retirerCaractereFin(): string | undefined {
        return this.tableau.pop();
    }

    chaine(): string {
        return this.tableau.join("");
    }
}

export function assembleurString(s: string): AssembleurString {
    return new AssembleurString(s);
}