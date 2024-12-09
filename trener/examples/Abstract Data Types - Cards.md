```ts

// ADT - Abstract Data Types

type Idle = { isLoading: false };
type Progress = { isLoading: true };

type Success<T = unknown> = { data: T; error: never };
type Failed<E = unknown> = { data: never; error: E };

type Loaded<T, E> = Success<T> | Failed<E>;

// ADT - Playing Cards
type RequestStatus<T, E> = Progress | Loaded<T, E> | Idle;

type Suit = "club" | "heart" | "spade" | "diamond";

type Number = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type Figure = "Ace" | "Queen" | "King" | "Knight" | "Joker";

type Card = {
  suit: Suit;
  value: Figure | Number;
};
const card: Card = { suit: "club", value: 10 };

```