export interface FabriqueNat<T>{
    creerNatAvecValeur(value : number) : T;

    creerZero() : T;

    creerSuccesseur(nat : T) : T;

    creerNatAvecRepresentation(chaine: string) : T;
}