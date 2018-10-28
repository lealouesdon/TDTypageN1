/*
* Hiérachie de structures algébriques.
*/

export interface SemiGroupeAdditif<T> {
	somme(x: T): T;
}

export interface SemiGroupeMultiplicatif<T> {
	produit(x: T): T;
}

export interface UnifereAddition<T> {
	zero(): T;
}

export interface UnifereMultiplication<T> {
	un(): T;
}

export interface MonoideAdditif<T>
	extends SemiGroupeAdditif<T>, UnifereAddition<T> { }

export interface MonoideMultiplicatif<T>
	extends SemiGroupeMultiplicatif<T>, UnifereMultiplication<T> { }

export interface SymetriqueAddition<T> {
	oppose(): T;
}

export interface SymetriqueMultiplication<T> {
	inverse(): T;
}

export interface GroupeAdditif<T>
	extends MonoideAdditif<T>, SymetriqueAddition<T> { }

export interface GroupeMultiplicatif<T>
	extends MonoideMultiplicatif<T>, SymetriqueMultiplication<T> { }

export interface BiUnifere<T> extends UnifereAddition<T>, UnifereMultiplication<T> { }

export interface BiSymetrique<T>
	extends SymetriqueAddition<T>, SymetriqueMultiplication<T> { }

export interface SemiAnneau<T>
	extends MonoideAdditif<T>, SemiGroupeMultiplicatif<T> { }

export interface SemiAnneauUnitaire<T>
	extends SemiAnneau<T>, MonoideMultiplicatif<T>, BiUnifere<T> { }

export interface Euclidien<T> {
	modulo(x: T): T;
	div(x: T): T;
}

export interface SemiAnneauUnitaireEuclidien<T>
	extends SemiAnneau<T>, MonoideMultiplicatif<T>, BiUnifere<T>, Euclidien<T> { }


export interface Anneau<T> extends SemiAnneau<T>, GroupeAdditif<T> { }

export interface AnneauUnitaireEuclidien<T>
	extends SemiAnneauUnitaire<T>, Anneau<T>, Euclidien<T> { }

export interface AnneauUnitaire<T> extends SemiAnneauUnitaire<T>, Anneau<T> { }

export interface Corps<T>
	extends AnneauUnitaire<T>, GroupeMultiplicatif<T>, BiSymetrique<T> { }





