#!/usr/bin/env tsx
export {};

// npx tsx ./trener/examples/functional.ts

{
  const list = [1, 2, 3, 4];
  const list2 = [];

  //   for (let l of list) console.log(l);

  const isEven = (x: number) => x % 2 == 0;
  const multBy = (factor: number) => (x: number) => x * factor;
  const show = (x: number) => console.log(x);

  const res = list
    .filter(isEven)
    //   .map((x) => multBy(2, x))
    //   .map((x) => multBy(2) (x))
    .map(multBy(2))
    .forEach(show);
}

import * as R from "remeda";

{
  // Exercise: Write 'isNot' function:

  const list = [1, 2, 3, 4];

  // Functional Combinator - isNot (aka. complement )
  //   const isNot = (fn: (x: number) => boolean) => {
  //     return (x: number) => {
  //       return !fn(x);
  //     };
  //   };
  // const isNot = fn => x => !fn(x)

  const isNot = (fn: (x: number) => boolean) => (x: number) => !fn(x);

  const isEven = (x: number) => x % 2 === 0;
  // const isOdd = (x: number) => x % 2 !== 0;

  const isOdd = isNot(isEven);

  // const result = list.filter(isEven);
  const result = list.filter(isOdd);

  console.log(result);
}

{
  const OUR_COUNTRY = "PL";
  type Person = {
    age: number;
    birthCountry: string;
    naturalizationDate: boolean;
  };

  const wasBornInCountry = (person: Person) =>
    person.birthCountry === OUR_COUNTRY;
  
  const wasNaturalized = (person: Person) => Boolean(person.naturalizationDate);
  const isOver18 = (person: Person) => person.age >= 18;

  const isCitizen = (person: Person) =>
    wasBornInCountry(person) || wasNaturalized(person);

  const isEligibleToVote = (person: Person) =>
    isOver18(person) && isCitizen(person);
}
