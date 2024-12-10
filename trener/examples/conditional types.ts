export {};

// Conditional Types

type Point = { x: number; y: number };
type Vector = { x: number; y: number; length: number };

// wynik = warunek ? prawda : falsz
type IsPointAVector = Point extends Vector ? "banana" : "placki"; // placki
type IsVectorAPoint = Vector extends Point ? true : false; // true

// wynik = a <= b ? prawda : falsz
type IsPointAPoint = Point extends Point ? 1 : 0; // 1

// Conditional types on Unions
type ExtendsUnions1 = "banana" | "placki" extends string ? true : false;
type ExtendsUnions2 = "banana" extends "banana" | "placki" ? true : false;

type mergingUnions = "banana" | "banana" | never | never;

type ExcludeBanana<T> = T extends "banana" | "bananas" ? never : T;

// Distributive over unions - 2 * ( 3 + 4 + 5 )
type NoBananas = ExcludeBanana<"bananas" | "banana" | "apple" | "placki">;

type Exclude<T, U> = T extends U ? never : T;
type Extract<T, U> = T extends U ? T : never;

type OnlyStrings = Extract<"banana" | "plack" | 123 | true, string>;

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type ExactOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type P1 = Omit<Vector, "length2">;
type P2 = ExactOmit<Vector, "length">;
