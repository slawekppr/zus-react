export {};

// Conditional Types

type Point = { x: number; y: number };
type Vector = { x: number; y: number; length: number };

// wynik = warunek ? prawda : falsz
type IsPointAVector = Point extends Vector ? "banana" : "placki";
type IsVectorAPoint = Vector extends Point ? true : false;

// wynik = a >= b ? prawda : falsz
type IsPointAPoint = Point extends Point ? 1 : 0;
