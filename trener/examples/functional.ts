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

import * as R from "ramda";
import * as Re from "remeda";
{
  const OUR_COUNTRY = "PL";

  type Person = {
    age: number;
    birthCountry: string; // Always Citizen
    naturalizationDate?: Date; // Become Citizen
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

{
  const OUR_COUNTRY = "PL";

  type Person = {
    age: number;
    birthCountry: string; // Always Citizen
    naturalizationDate?: Date; // Become Citizen
  };

  const wasBornInCountry = (person: Person) =>
    person.birthCountry === OUR_COUNTRY;

  const wasNaturalized = (person: Person) => Boolean(person.naturalizationDate);
  const isOver18 = (person: Person) => person.age >= 18;

  // const isCitizen = (person: Person) => wasBornInCountry(person) || wasNaturalized(person);
  // const isCitizen = (person: Person) => R.either(wasBornInCountry,wasNaturalized) (person)
  const isCitizen = R.either(wasBornInCountry, wasNaturalized);

  //   const isEligibleToVote = (person: Person) => isOver18(person) && isCitizen(person);
  //   const isEligibleToVote = (person: Person) => R.both(isOver18,isCitizen) (person)
  const isEligibleToVote = R.both(isOver18, isCitizen);
}

{
  const multiply = (a: number) => (b: number) => a * b;
  const addOne = (x: number) => x + 1;
  const square = (x: number) => x * x;

  const operate = (x: number, y: number) => {
    const product = multiply(x)(y);
    const incremented = addOne(product);
    const squared = square(incremented);

    return squared;
  };
  const operate2 = (x: number, y: number) => square(addOne(multiply(x)(y)));

  const hasGoldStatus = R.gt(5);

  const operate3 = (x: number, y: number) =>
    R.pipe(
      multiply(y),
      R.cond([
        // [(x) => x < 5, addOne],
        [hasGoldStatus, addOne],
        [R.T, (val: number) => val - 1],
      ]),
      square
    );
  //   function pipe(...params:Function[]) { }

  operate(3, 4); // => ((3 * 4) + 1)^2 => (12 + 1)^2 => 13^2 => 169
}

{
  type Book = {
    title: string;
    year: number;
  };

  const publishedInYear = (book: Book, year: number) => book.year === year;
  const publishedInYearF = R.flip(publishedInYear);

  const titlesForYear = (books: Book[], year: number) => {
    // const selected = R.filter((book) => publishedInYear2(year) (book), books);
    // const selected = R.filter(publishedInYear2(year), books);

    const predicate = publishedInYearF(year);

    return R.pipe(
      R.filter(predicate),
      //   R.map((book) => book.title)
      R.map(R.prop("title"))
    )(books);

    // return R.map((book) => book.title, selected);
  };

  const titlesForYear2 = (
    year: number
    // => (books: Book[]) => //
  ) =>
    R.pipe(
      R.filter(publishedInYearF(year)), //
      R.map(R.prop("title")) //
    ); // (books);

  titlesForYear(
    [
      { title: "Game of thrones", year: 2000 },
      { title: "Banana", year: 2010 },
      { title: "Placki", year: 2000 },
      { title: "Wódz i buc", year: 2010 },
    ],
    2000
  );
}
