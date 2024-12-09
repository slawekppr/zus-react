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

function getUserInfo<T extends { name: string }>(person: T): T["name"] {
  return person.name;
}
getUserInfo(admin);
// getUserInfo({ placki: 123 }); // Error
