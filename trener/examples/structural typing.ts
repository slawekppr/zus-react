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

// Contravariance - take what is given or less
type Renderer = {
  renderVector: (v: Vector) => void;
  renderPoint: (v: Point) => void;
//   renderVector(v: Vector): void; // Bivariance
//   renderPoint(v: Point): void;
};

declare function renderVector(v: Vector): void;
declare function renderPoint(v: Point): void;

const renderer = {} as Renderer;
renderer.renderPoint = renderPoint;
renderer.renderVector = renderVector;

renderer.renderVector = renderPoint;
// renderer.renderPoint = renderVector; // cant recieve vector if point is given

