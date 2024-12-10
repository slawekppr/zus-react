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

type mergingUnions  = 'banana' | 'banana' | never | never

