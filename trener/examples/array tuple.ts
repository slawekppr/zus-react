export {}
const tablica = [123, "Zbigniew", "Banan", true]; // (string | number | boolean)[]
tablica[1] = false;
tablica.push(123);

const krotka = [123, "Zbigniew", "Banan", true] as const;

let names: string[] = [];

type Person = [id: number, name: string];

let person: Person = [123, "Pankracy"];

// function takePerson(person: Person) {}
function takePerson(...person: Person) {}
function takePerson2([id, name]: Person) {
  id;
  name;
}
function savePerson(db: string, ...person: Person) {}

takePerson(123, "123"); // takePerson(id: number, name: string)

// type TickTacToe = string[][];
// type TickTacToe = Array<Array<string>>;

type ValidMoves = "X" | "O";
// type TickTacToe = Array<Array<ValidMoves>>;
// type Row = [Field, Field, Field];

type Field = ValidMoves | "";
type TickTacToe = [
  [Field, Field, Field],
  [Field, Field, Field],
  [Field, Field, Field]
];

const tictactoe: TickTacToe = [
  ["X", "O", "O"],
  ["O", "X", "X"],
  ["X", "X", "O"],
];

const onlyStrings = (x: string | false): x is string => !!x;

// Typing function params, array methods
const cls = (...classes: (string | false)[]) =>
  classes.filter(onlyStrings).join(" ");

let selected = false;
let active = true;
// <div className= {cls("px-5", selected && "text-red", active && "bg-blue")} />

cls("px-5", selected && "text-red", active && "bg-blue");
