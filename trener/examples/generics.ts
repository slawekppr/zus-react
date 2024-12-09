const empty = [];
const anyBox: any[] = [];
const maybeString: string[] = [];
const arrayN: number[] = [1, 2, 3];
const arrayS: Array<string> = ["Ala", "Ma", "Kota"];

type AnyBox = {
  value: any;
};

const value = "banana";
const aBox: AnyBox = { value };
const result = aBox.value; // any

type TypedBox<T> = { value: T };
const typedBox: TypedBox<string> = { value };
typedBox.value;

// Useless Generics
declare function parseJSON<T>(json: string): T;
declare function serializeJSON<T>(obj: T): string;

JSON.parse("...") as "Cokolwiek";
serializeJSON({ x: 1 }) === "???";

// Useful generics
function identity<T>(x: T): T {
  return x;
}

// Generic constraints
const admin = { name: "admin" };
const person = { name: "person", age: 23 };
const bot = { name: "Chatb0t", model: "gpt99" };

// POCO?
function getUserInfo<T extends { name: string }>(person: T): T["name"] {
  return person.name;
}
getUserInfo(admin);
// getUserInfo({ placki: 123 }); // Error

// To samo co wyżej, ale krócej!
function getUserInfo2(person: { name: string }): string {
  return person.name;
}
getUserInfo2(bot);

function logAndReturnPerson(person: { name: string }) {
  console.log(person.name);
  return person;
}
function logAndReturnPerson2<T extends { name: string }>(person: T) {
  console.log(person.name);
  return person;
}

// logAndReturnPerson(bot).model // Error - not a bot anymore!
logAndReturnPerson2(bot).model;
logAndReturnPerson2(person).age;

// Generic Collections

interface Collection<T> {
  add(elem: T): void;
  get(): T;
  // get(): T | undefined;
}

// FILO
class Stack<T> implements Collection<T> {
  private items: T[] = [];
  add(elem: T): void {
    this.items.push(elem);
  }
  get(): T {
    if (this.items.length === 0) throw new Error("Empty Stack");
    return this.items.pop()!;
  }
}

// FIFO
class Queue<T> implements Collection<T> {
  private items: Array<T> = [];
  add(elem: T): void {
    this.items.unshift(elem);
  }
  get(): T {
    const item = this.items.pop();
    if (!item) throw new Error("Empty Stack");
    return item; // NonNullable<T>
  }
}

// Inferring Generics

// function getValue<T>(box: {value:T}) {return value;}

// function getFirst<T extends Array<any>>(arr: T): T[number]  {
// function getFirst<T>(arr: T[]): T {
function getFirst<T>(arr: T[]) {
  return arr[0];
}

// Generic "Collapsing" on contact with concrete type
const ret1 = getFirst<string>(["ala", "ma"]);  // string
const res2 = getFirst([123, 324, 345]);        // number
const res3: boolean = getFirst([true]);        // boolean
