export interface Identifiable<T> {
    estEgal(x: T): boolean;
}

export interface Representable {
    representation(): string;
}