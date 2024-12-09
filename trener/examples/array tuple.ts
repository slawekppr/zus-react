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

type Field = ValidMoves | ''
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
