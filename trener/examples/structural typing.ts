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
declare function renderLine(v1: Point, v2: Point): void;
declare function renderClear(): void;

const renderer = {} as Renderer;
renderer.renderPoint = renderPoint;
renderer.renderVector = renderVector;
renderer.renderVector = renderClear;
// renderer.renderVector = renderLine;

renderer.renderVector = renderPoint;
// renderer.renderPoint = renderVector; // cant recieve vector if point is given

function fromPoint(v: Point) {}

fromPoint(p);
fromPoint(v); // Vector OK
fromPoint({ x: 123, y: 123 });
// fromPoint({ x: 123, y: 123, length: 123 }); // Freshness error - Typo!

// # Tagged / Branded Types

declare const UserId: unique symbol;

let userId = "123" as string & { [UserId]: "userId" };
let paramId = "234" as string & { type: "postId" };

function findUserById(userId: string & { [UserId]: "userId" }) {}
function findPostById(postId: string & { type: "postId" }) {}

findUserById(userId);
// findPostById(userId); // Error

paramId.type.toLocaleLowerCase(); // Runtime Error!
// paramId[UserId].toLocaleLowerCase(); // Runtime Error!
// paramId.[???? symbol not visible ???].toLocaleLowerCase(); // Runtime Error!

type Brand<B> = { __type: B };
type Branded<T, B> = T & Brand<B>;

declare const Zloty: unique symbol;

type PLN = Branded<number, typeof Zloty>;

const wyplata = 123 as PLN;
function wyplac(wyplata: PLN) {}

const premia = wyplata + 123 as PLN

wyplac(wyplata);
wyplac(123 as PLN );
