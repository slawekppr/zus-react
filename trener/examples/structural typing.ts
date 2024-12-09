interface Vector {
  x: number;
  y: number;
  length: number;
}
type Point = { x: number; y: number };

let v: Vector = { x: 423, y: 233, length: 123 };
let p: Point = { x: 123, y: 123 };

// Structural Typing ( vs. Nominal Typing ) a.k.a Duck Typing
p = v;
// v = p; // Property 'length' is missing in type 'Point' but required in type 'Vector'.

// Convariance - give at least what is expected

p = v; // p and v points to same memory address. TypeScript "hides" extra data

(p as Vector).length;

// Type Wideing
if ("length" in p && typeof p.length === "number") {
  /// p ???
  p.length;
}
